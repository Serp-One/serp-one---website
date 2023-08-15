import { Icons } from "@/components/icons";
import { PageContaier, TextGradient, ZStack } from "@/components/misc";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { SerpInput } from "@/components/serp-input";
import { Rubik } from "next/font/google";
import { cn } from "@/lib/utils";
import { PositionsProvider } from "@/lib/context/positions";
import PositionsTable from "@/components/positions-table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TIERS } from "@/content/misc";

const rubik = Rubik({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="flex-col">
        <SiteHeader />
        <ZStack>
          <div className="w-full h-full bg-center bg-repeat bg-[url('/pattern.svg')] opacity-[0.2]" />
          <div className="w-full h-full bg-gradient-to-r from-white from-5%" />
          <div className="w-full h-full bg-gradient-to-l from-white from-5%" />
          <div className="w-full h-full bg-gradient-to-t from-white to-50%" />
          <PageContaier>
            <div className="flex flex-col items-center pt-24 pb-48 md:pt-32 md:pb-24">
              <h1
                className={cn(
                  rubik.className,
                  "drop-shadow-md text-6xl font-bold text-center"
                )}
              >
                <TextGradient>Rank</TextGradient> Higher,{" "}
                <TextGradient>Grow</TextGradient> Faster
              </h1>
              <p className="text-xl font-medium text-center text-gray-500 mt-4">
                Number One tool for tracking your Search Engine Rankings
              </p>
              {/* <Link href="/sign-up">
                <Button
                  className="transition-all shadow-2xl hover:shadow-sm mt-8 text-base font-semibold px-4 py-4"
                >
                  Start for free{" "}
                  <span className="ml-3 transform rotate-90">
                    <Icons.arrowUp className=" h-4 w-4 stroke-2 animate-bounce" />{" "}
                  </span>
                </Button>
              </Link> */}
              <div className="w-3/4 mt-12">
                <PositionsProvider>
                  <SerpInput />
                  <br />
                  <PositionsTable
                    data={[
                      {
                        url: "https://devrev.ai",
                        keyword: "zendesk alternatives",
                        position: 6,
                        country: "US",
                      },
                    ]}
                  />
                </PositionsProvider>
              </div>
            </div>
          </PageContaier>
        </ZStack>
        <PageContaier className="w-full max-w-4xl flex flex-col gap-y-8 pb-24">
          <h2 id="pricing" className="scroll-mt-24 text-4xl font-bold text-center">Pricing</h2>
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
            {TIERS.map((o: any, i: number) => (
              <Card key={i}>
                <CardHeader className="pb-3">
                  <CardTitle>{o.label}</CardTitle>
                  <CardDescription>{o.description}</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-1">
                  {o.features.map((f: any, i: number) => (
                    <div
                      key={i}
                      className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground"
                    >
                      {/* <BellIcon className="mt-px h-5 w-5" /> */}
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">
                          {f.label}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {f.description}
                        </p>
                      </div>
                    </div>
                  ))}
                  
                  <Button className="mt-8" variant={i % 2 == 0 ? "secondary" : undefined}>${o.price}</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </PageContaier>
        <PageContaier className="w-full max-w-4xl flex flex-col gap-y-8 pb-24">
          <h2 className="text-4xl font-bold text-center">
            Understand Findability
          </h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What is SERP?</AccordionTrigger>
              <AccordionContent>
                SERP stands for Search Engine Results Page. It is the page
                displayed by a web search engine in response to a query by a
                searcher. The main component of the SERP is the listing of
                results that are returned by the search engine in response to a
                keyword query.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                What factors influence SERP rankings?
              </AccordionTrigger>
              <AccordionContent>
                Many factors can influence SERP rankings, including the
                relevance and quality of the website content to the search
                query, the number and quality of links pointing to the website,
                the structure of the website, the website&apos;s loading speed,
                the website&apos;s mobile-friendliness, social signals, user
                behavior, and more. Search engines&apos; algorithms consider
                these factors when determining where a site will rank in their
                results.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>What is organic SERP?</AccordionTrigger>
              <AccordionContent>
                Organic SERP refers to the list of results that appear in a
                search engine&apos;s results page because they are relevant to
                the search terms and not because of paid advertising. Organic
                search results are ranked according to their relevance to the
                search term and the overall quality of the website.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>What is SERP analysis?</AccordionTrigger>
              <AccordionContent>
                SERP analysis involves examining the top search results for a
                particular keyword or set of keywords. This can give you an idea
                of the competition and difficulty of ranking for these keywords,
                and it can also provide insights into the types of content that
                are performing well for these search terms.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>What is a SERP feature?</AccordionTrigger>
              <AccordionContent>
                A SERP feature is any result on a Google Search Engine Results
                Page (SERP) that is not a traditional organic result. SERP
                features can include paid Google Ads results, Featured Snippets,
                Local Packs, Knowledge Graphs, Image Packs, Video results, and
                more. These features are designed to provide users with the most
                relevant information in the most usable format.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </PageContaier>
        <SiteFooter />
      </div>
    </>
  );
}
