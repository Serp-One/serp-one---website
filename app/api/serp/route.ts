import { createGoogleSearchUrl } from "@/lib/utils";
import { NextRequest, NextResponse } from "next/server";
import * as cheerio from "cheerio";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  return NextResponse.json({ hello: searchParams });
}

export async function POST(request: NextRequest) {
  const { keyword = "", url = "", country = "" } = await request.json();

  if (keyword === "" || url === "" || country === "") {
    NextResponse.error();
  }
  const googleSearchUrl = createGoogleSearchUrl({ query: keyword, country });

  try {
    let response: any = await fetch(googleSearchUrl);
    const $ = await cheerio.load(await response.text());

    let position = 0;
    $("#main > div > div > div > a").map((i, el) => {
      const href = $(el).attr("href");
      if (href?.includes(url) && position === 0) {
        position = i + 1;
      }
    });

    return NextResponse.json({ googleSearchUrl, position });
  } catch (error) {
    console.log(error);
    NextResponse.json({ error });
  }
}
