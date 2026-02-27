import type { Metadata } from "next";
import Link from "next/link";
import {
  Callout,
  PullQuote,
  SectionDivider,
  StatRow,
} from "../../components/blog";

export const metadata: Metadata = {
  title: "Golf courses use 30x more water than all US data centers - Building Open",
  description: "I was worried about my AI carbon footprint. Then I fact-checked it. The numbers are surprising.",
};

export default function GolfVsDatacentersPost() {
  return (
    <article className="py-16">
      <div className="mx-auto max-w-2xl px-6">
        <Link href="/blog" className="text-sm text-zinc-500 hover:text-white transition-colors mb-8 block">
          &larr; Blog
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs px-2 py-0.5 bg-zinc-800 text-zinc-400 rounded">Data</span>
            <span className="text-xs text-zinc-500">5 min read</span>
            <span className="text-xs text-zinc-500">February 18, 2026</span>
          </div>
          <h1 className="text-3xl font-bold mb-3">Golf courses use 30x more water than all US data centers</h1>
          <p className="text-zinc-500">I was worried about my AI carbon footprint. Then I fact-checked it.</p>
        </header>

        <section className="mb-10 text-zinc-400 space-y-6">
          <p className="leading-relaxed">
            I heard Peter Steinberger mention on Lex Fridman that golf courses use more water than data centers. It sounded like one of those stats that&apos;s too good to be true.
          </p>
          <p className="leading-relaxed">
            So I fact-checked it.
          </p>
          <p className="leading-relaxed">
            It&apos;s true. But it&apos;s also misleading, depending on how you count.
          </p>

          <StatRow
            stats={[
              { value: "30x", label: "golf vs data centers (direct)" },
              { value: "~2x", label: "golf vs data centers (total)" },
            ]}
          />

          <SectionDivider />

          <h2 className="text-white font-semibold text-lg mt-8 mb-2">Direct cooling water only</h2>
          <p className="leading-relaxed">
            If you only look at the water data centers use for cooling (the water they physically consume on-site), the comparison is stark:
          </p>
          <Callout>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Data centers</span>
                <span className="text-white font-medium">17B gal/year</span>
              </div>
              <div className="flex justify-between">
                <span>Golf courses</span>
                <span className="text-white font-medium">500B gal/year</span>
              </div>
              <hr className="border-zinc-800" />
              <div className="flex justify-between">
                <span>Ratio</span>
                <span className="text-white font-medium">30x more for golf</span>
              </div>
            </div>
          </Callout>

          <SectionDivider />

          <h2 className="text-white font-semibold text-lg mt-8 mb-2">Including electricity generation</h2>
          <p className="leading-relaxed">
            But data centers use massive amounts of electricity, and power plants use water too. When you include the indirect water footprint from electricity generation, the picture changes:
          </p>
          <Callout>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Data centers (total)</span>
                <span className="text-white font-medium">228B gal/year</span>
              </div>
              <div className="flex justify-between">
                <span>Golf courses</span>
                <span className="text-white font-medium">500B gal/year</span>
              </div>
              <hr className="border-zinc-800" />
              <div className="flex justify-between">
                <span>Ratio</span>
                <span className="text-yellow-500 font-medium">~2x more for golf</span>
              </div>
            </div>
          </Callout>
          <p className="leading-relaxed">
            The indirect water footprint from power plants is 12x larger than direct cooling. Most people ignore this.
          </p>

          <SectionDivider />

          <h2 className="text-white font-semibold text-lg mt-8 mb-2">For perspective</h2>
          <p className="leading-relaxed">
            US households use about 10 trillion gallons per year. In that context, both golf and data centers are small:
          </p>
          <Callout>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>US Households</span>
                <span className="text-white font-medium">10,000B gal/year (100%)</span>
              </div>
              <div className="flex justify-between">
                <span>Golf courses</span>
                <span className="text-white font-medium">500B gal/year (5%)</span>
              </div>
              <div className="flex justify-between">
                <span>Data centers (total)</span>
                <span className="text-white font-medium">228B gal/year (2.3%)</span>
              </div>
              <div className="flex justify-between">
                <span>Data centers (direct)</span>
                <span className="text-white font-medium">17B gal/year (0.17%)</span>
              </div>
            </div>
          </Callout>

          <SectionDivider />

          <h2 className="text-white font-semibold text-lg mt-8 mb-2">The real story: trajectory</h2>
          <p className="leading-relaxed">
            Data center direct water use tripled between 2014 and 2023 (from 5.6B to 17B gallons). Projections suggest it could double or quadruple again by 2028, driven by AI demand.
          </p>

          <PullQuote>
            AI isn&apos;t &quot;boiling the oceans&quot; today. But the trajectory matters, and it&apos;s worth watching.
          </PullQuote>

          <h2 className="text-white font-semibold text-lg mt-8 mb-2">Sources</h2>
          <ul className="space-y-2 text-sm text-zinc-500">
            <li>
              <a href="https://www.eesi.org/articles/view/data-centers-and-water-consumption" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                Environmental and Energy Study Institute - Data centers and water consumption
              </a>
            </li>
            <li>
              <a href="https://eta-publications.lbl.gov/sites/default/files/2024-12/lbnl-2024-united-states-data-center-energy-usage-report_1.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                Lawrence Berkeley National Laboratory - 2024 US Data Center Energy Usage Report
              </a>
            </li>
            <li>
              <a href="https://www.gcsaa.org/docs/default-source/Environment/phase-2-water-use-survey-full-report.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                GCSAA / USGA - Golf Course Environmental Profile: Water Use Survey
              </a>
            </li>
            <li>
              <a href="https://www.usgs.gov/mission-areas/water-resources/science/water-use-united-states" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                US Geological Survey - Water Use in the United States
              </a>
            </li>
            <li>
              <a href="https://www.epa.gov/watersense/statistics-and-facts" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                US EPA - WaterSense Statistics and Facts
              </a>
            </li>
          </ul>
        </section>

        <hr className="border-zinc-800 my-10" />

        <div className="mb-10">
          <p className="text-xs uppercase tracking-wider text-zinc-500 mb-4">Related posts</p>
          <div className="space-y-3">
            <Link href="/blog/claude-code-context" className="block text-sm text-zinc-400 hover:text-white transition-colors">
              Why Claude Code is my new best friend &rarr;
            </Link>
            <Link href="/blog/founder-habits" className="block text-sm text-zinc-400 hover:text-white transition-colors">
              I treated my life like a product. Here&apos;s what I removed. &rarr;
            </Link>
          </div>
        </div>

        <div className="flex gap-4 justify-center">
          <Link
            href="/blog"
            className="px-5 py-2.5 border border-zinc-700 rounded-lg hover:border-white hover:text-white transition-colors text-sm"
          >
            All posts
          </Link>
        </div>
      </div>
    </article>
  );
}
