import { Marquee } from "../ui/marquee";
import OpenAI from "../icons/open-ai";
import Anthropic from "../icons/anthropic";
import Gemini from "../icons/gemini";
import MistralAI from "../icons/mistral";
import DeepSeek from "../icons/deepseek";
import Perplexity from "../icons/perplexity";
import XAi from "../icons/xai";

const icons = [OpenAI, Anthropic, Gemini, MistralAI, DeepSeek, Perplexity, XAi];

export function MarqueeDemo() {
    return (
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
            <Marquee className="[--duration:15s]">
                {icons.map((Icon, i) => (
                    <div
                        key={i}
                        className="mx-6 text-5xl text-foreground/70 hover:text-foreground transition-colors"
                    >
                        <Icon />
                    </div>
                ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
        </div>
    );
}