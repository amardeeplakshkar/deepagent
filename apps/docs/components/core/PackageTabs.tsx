import { DynamicCodeBlock } from 'fumadocs-ui/components/dynamic-codeblock';
import { Tabs, TabsContent, TabsList, TabsTrigger } from 'fumadocs-ui/components/tabs';
import React from 'react';
import { Npmicon, PnpmIcon, YarnIcon } from './Icons';

type PackageTabsProps = {
    children: string;
};

const PackageTabs = ({ children }: PackageTabsProps) => {
    function markdownToJson(markdown: string) {
        const regex = /```bash\s*([\s\S]*?)```/g;
        const matches = [...markdown.matchAll(regex)];

        return matches.map((match) => {
            const block = match[1].trim().split("\n");
            const packageName = block[0].trim();
            const content = block.slice(1).join("\n");

            return {
                packageName,
                content,
            };
        });
    }

    const data = markdownToJson(children);

    return (
        <Tabs defaultValue={data[0]?.packageName ?? 'npm'}>
            <TabsList>
                {data.map((prop) => (
                    <TabsTrigger key={prop.packageName} value={prop.packageName}>
                        {
                            prop.packageName === 'npm' ? <Npmicon /> :
                                prop.packageName === 'pnpm' ? <PnpmIcon /> : <YarnIcon />
                        }
                        {prop.packageName}
                    </TabsTrigger>
                ))}
            </TabsList>
            {data.map((prop) => (
                <TabsContent key={prop.packageName} value={prop.packageName}>
                    <DynamicCodeBlock code={prop.content} lang="bash" />
                </TabsContent>
            ))}
        </Tabs>
    );
};

export default PackageTabs;
