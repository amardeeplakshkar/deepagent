import {
  aiFunction,
  AIFunctionsProvider,
  sanitizeSearchParams
} from '@agentic/core'
import defaultKy, { type KyInstance } from 'ky'
import { z } from 'zod'

export namespace coindesk {
  export const BASE_URL = 'https://api.coindesk.com'

  /**
   * Supported currencies for CoinDesk price index.
   */
  export type SupportedCurrency = 'USD' | 'EUR' | 'GBP' | 'CNY' | 'JPY'

  /**
   * Time period for historical data.
   */
  export type TimePeriod = 'close' | 'now' | 'yesterday'

  /**
   * Response from the current price index API.
   */
  export interface PriceIndexResponse {
    time: {
      updated: string
      updatedISO: string
      updateduk: string
    }
    disclaimer: string
    chartName: string
    bpi: {
      [key in SupportedCurrency]: CurrencyInfo
    }
  }

  /**
   * Currency information in the price index.
   */
  export interface CurrencyInfo {
    code: string
    symbol: string
    rate: string
    description: string
    rate_float: number
  }

  /**
   * Historical price data response.
   */
  export interface HistoricalPriceResponse {
    time: {
      updated: string
      updatedISO: string
      updateduk: string
    }
    disclaimer: string
    bpi: {
      [date: string]: number
    }
  }

  /**
   * Response from the supported currencies endpoint.
   */
  export interface SupportedCurrenciesResponse {
    [currencyCode: string]: string
  }

  /**
   * Input parameters for historical price data.
   */
  export interface HistoricalPriceInput {
    /** Start date in YYYY-MM-DD format */
    start?: string
    /** End date in YYYY-MM-DD format */
    end?: string
    /** Currency code (defaults to USD) */
    currency?: SupportedCurrency
    /** Index type (defaults to USD) */
    index?: SupportedCurrency
  }

  /**
   * Input parameters for current price index.
   */
  export interface CurrentPriceInput {
    /** Currency code to include in response */
    currency?: SupportedCurrency
  }
}

/**
 * CoinDesk API client for accessing Bitcoin price index and historical data.
 *
 * The CoinDesk API provides Bitcoin price index data, historical prices,
 * and currency information. No API key is required for basic usage.
 *
 * @see https://developers.coindesk.com/documentation/data-api/introduction
 */
export class CoindeskClient extends AIFunctionsProvider {
  protected readonly ky: KyInstance
  protected readonly apiBaseUrl: string

  constructor({
    apiBaseUrl = coindesk.BASE_URL,
    ky = defaultKy
  }: {
    apiBaseUrl?: string
    ky?: KyInstance
  } = {}) {
    super()

    this.apiBaseUrl = apiBaseUrl
    this.ky = ky.extend({
      prefixUrl: apiBaseUrl,
      timeout: 30_000 // 30 second timeout
    })
  }

  /**
   * Gets the current Bitcoin Price Index (BPI) in multiple currencies.
   * The BPI shows the current price of Bitcoin in USD, EUR, and GBP by default.
   */
  @aiFunction({
    name: 'get_current_bitcoin_price',
    description:
      'Gets the current Bitcoin price index in multiple currencies (USD, EUR, GBP). Returns real-time Bitcoin pricing data.',
    inputSchema: z.object({
      currency: z
        .enum(['USD', 'EUR', 'GBP', 'CNY', 'JPY'])
        .optional()
        .describe(
          'Specific currency to include in the response. If not specified, returns USD, EUR, and GBP.'
        )
    })
  })
  async getCurrentPrice(options: coindesk.CurrentPriceInput = {}) {
    const endpoint = options.currency
      ? `v1/bpi/currentprice/${options.currency.toLowerCase()}.json`
      : 'v1/bpi/currentprice.json'

    return this.ky.get(endpoint).json<coindesk.PriceIndexResponse>()
  }

  /**
   * Gets historical Bitcoin price data for a specified date range.
   * Historical data is available from July 18, 2010.
   */
  @aiFunction({
    name: 'get_historical_bitcoin_price',
    description:
      'Gets historical Bitcoin price data for a specified date range. Data is available from July 18, 2010. Returns daily closing prices.',
    inputSchema: z.object({
      start: z
        .string()
        .optional()
        .describe(
          'Start date in YYYY-MM-DD format. If not specified, defaults to 31 days ago.'
        ),
      end: z
        .string()
        .optional()
        .describe(
          'End date in YYYY-MM-DD format. If not specified, defaults to yesterday.'
        ),
      currency: z
        .enum(['USD', 'EUR', 'GBP', 'CNY', 'JPY'])
        .optional()
        .describe('Currency for the price data. Defaults to USD.')
    })
  })
  async getHistoricalPrice(options: coindesk.HistoricalPriceInput = {}) {
    const searchParams = sanitizeSearchParams({
      start: options.start,
      end: options.end,
      currency: options.currency || 'USD',
      index: options.index || 'USD'
    })

    return this.ky
      .get('v1/bpi/historical/close.json', {
        searchParams
      })
      .json<coindesk.HistoricalPriceResponse>()
  }

  /**
   * Gets the Bitcoin price for yesterday.
   * This is a convenience method for getting the most recent closing price.
   */
  @aiFunction({
    name: 'get_yesterday_bitcoin_price',
    description:
      'Gets the Bitcoin price for yesterday (the most recent closing price). Returns the closing price in USD, EUR, and GBP.',
    inputSchema: z.object({})
  })
  async getYesterdayPrice() {
    return this.ky
      .get('v1/bpi/historical/close.json?for=yesterday')
      .json<coindesk.HistoricalPriceResponse>()
  }

  /**
   * Gets a list of supported currencies that can be used with the price index.
   */
  @aiFunction({
    name: 'get_supported_currencies',
    description:
      'Gets a list of all currencies supported by the CoinDesk API for Bitcoin price data.',
    inputSchema: z.object({})
  })
  async getSupportedCurrencies() {
    return this.ky
      .get('v1/bpi/supported-currencies.json')
      .json<coindesk.SupportedCurrenciesResponse>()
  }

  /**
   * Gets Bitcoin price in a specific currency.
   * This method allows you to get the current Bitcoin price in any supported currency.
   */
  @aiFunction({
    name: 'get_bitcoin_price_in_currency',
    description:
      'Gets the current Bitcoin price in a specific currency. Supports USD, EUR, GBP, CNY, and JPY.',
    inputSchema: z.object({
      currency: z
        .enum(['USD', 'EUR', 'GBP', 'CNY', 'JPY'])
        .describe(
          'The currency code to get the Bitcoin price in (e.g., "USD", "EUR", "GBP")'
        )
    })
  })
  async getPriceInCurrency(input: { currency: coindesk.SupportedCurrency }) {
    return this.ky
      .get(`v1/bpi/currentprice/${input.currency.toLowerCase()}.json`)
      .json<coindesk.PriceIndexResponse>()
  }

  /**
   * Gets Bitcoin price data for the last 31 days.
   * This is a convenience method for getting recent price trends.
   */
  @aiFunction({
    name: 'get_bitcoin_price_last_31_days',
    description:
      'Gets Bitcoin price data for the last 31 days. Returns daily closing prices to show recent price trends.',
    inputSchema: z.object({
      currency: z
        .enum(['USD', 'EUR', 'GBP', 'CNY', 'JPY'])
        .optional()
        .describe('Currency for the price data. Defaults to USD.')
    })
  })
  async getLast31DaysPrice(
    input: { currency?: coindesk.SupportedCurrency } = {}
  ) {
    const currency = input.currency || 'USD'
    const searchParams = sanitizeSearchParams({
      currency,
      index: currency
    })

    return this.ky
      .get('v1/bpi/historical/close.json', {
        searchParams
      })
      .json<coindesk.HistoricalPriceResponse>()
  }
}
