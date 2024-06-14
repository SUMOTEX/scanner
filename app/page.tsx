import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 bg-black text-white">
      <div className="inline-block max-w-lg text-center">
        <h1 className={title()}>Sumotex&nbsp;</h1>
        <h1 className={title({ color: "violet" })}>Blockchain&nbsp;</h1>
        <h1 className={title()}>Explorer</h1>
        <h2 className={subtitle({ class: "mt-4 text-gray-400" })}>
          Discover and analyze Sumotex blockchain transactions in real-time.
        </h2>
      </div>

      <div className="mt-6 w-full max-w-md">
        <input
          type="text"
          placeholder="Search by address, transaction hash, or token..."
          className="w-full px-4 py-2 rounded-full bg-gray-800 text-white placeholder-gray-500 focus:outline-none"
        />
      </div>

      <div className="mt-8 flex flex-row gap-8 w-full px-4">
        <div className="w-full md:w-1/2">
          <h3 className="text-center text-lg font-semibold mb-4">Recent Transactions</h3>
          <table className="min-w-full bg-gray-800 text-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b border-gray-600">Tx Hash</th>
                <th className="py-2 px-4 border-b border-gray-600">From</th>
                <th className="py-2 px-4 border-b border-gray-600">To</th>
                <th className="py-2 px-4 border-b border-gray-600">Value</th>
              </tr>
            </thead>
            <tbody>
              {/* Replace with dynamic data */}
              <tr>
                <td className="py-2 px-4 border-b border-gray-600">0x123...</td>
                <td className="py-2 px-4 border-b border-gray-600">0xabc...</td>
                <td className="py-2 px-4 border-b border-gray-600">0xdef...</td>
                <td className="py-2 px-4 border-b border-gray-600">1.234 ETH</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
        <div className="w-full md:w-1/2">
          <h3 className="text-center text-lg font-semibold mb-4">Recent Token Transfers</h3>
          <table className="min-w-full bg-gray-800 text-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b border-gray-600">Token</th>
                <th className="py-2 px-4 border-b border-gray-600">From</th>
                <th className="py-2 px-4 border-b border-gray-600">To</th>
                <th className="py-2 px-4 border-b border-gray-600">Amount</th>
              </tr>
            </thead>
            <tbody>
              {/* Replace with dynamic data */}
              <tr>
                <td className="py-2 px-4 border-b border-gray-600">SUMO</td>
                <td className="py-2 px-4 border-b border-gray-600">0x123...</td>
                <td className="py-2 px-4 border-b border-gray-600">0x456...</td>
                <td className="py-2 px-4 border-b border-gray-600">1000 SUMO</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-8">
        <Snippet hideCopyButton hideSymbol variant="flat">
          <span>
            Get started by exploring the latest Sumotex blockchain data on&nbsp;
          </span>
        </Snippet>
      </div>
    </section>
  );
}
