import { Accordion } from "flowbite-react";

export default function Frequently() {
  const questions = [
    {
      title: "What is crypto?",
      content:
        "Cryptocurrency is a digital or virtual currency that operates on distributed ledger technology called a blockchain and uses cryptography for security. It is decentralized and operates independently of a central bank. Unlike traditional currencies, cryptocurrencies are not backed by a physical commodity or government, and their value is determined by market demand and supply. Cryptocurrencies can be used to buy goods and services, transfer funds, and trade in markets. Popular cryptocurrencies include Bitcoin, Ethereum, Litecoin, Ripple, and Cronos. Many cryptocurrencies, like Bitcoin, are created through a process called mining, which involves solving complex mathematical equations to validate and record transactions on a blockchain. This mechanism is also called Proof of Work (PoW). Another consensus mechanism that has increased in popularity — as it is more energy efficient — is Proof of Stake (PoS). Instead of mining, PoS relies on network participants validating transactions. Ethereum, the second-largest cryptocurrency, uses this consensus mechanism.",
    },
    {
      title: "What is a blockchain?",
      content:
        "A blockchain is a distributed ledger that records transactions securely and transparently, without the need for intermediaries. Each block in the blockchain contains a cryptographic hash of the previous block, a timestamp, and transaction data. The blockchain is decentralized, meaning it operates independently of a central authority. Nodes in the network verify the integrity of the blockchain by validating the hashes of each block. When a new transaction occurs...",
    },
    {
      title: "What is Proof of Work (PoW)?",
      content:
        "Proof of Work (PoW) is a consensus mechanism that relies on network participants validating transactions. In PoW, a miner must solve a complex mathematical problem to validate a transaction and add it to the blockchain. This problem is difficult to solve for other nodes in the network, making it difficult for miners to generate new blocks and maintain the integrity of the blockchain. The solution to the problem is...",
    },
    {
      title: "What is Bitcoin?",
      content:
        "Bitcoin is a cryptocurrency that operates on a peer-to-peer (P2P) network. It was created in 2009 by an unknown person or group using the pseudonym Satoshi Nakamoto. Bitcoin is the first and most well-known cryptocurrency, and it has gained significant popularity and value since its creation. Unlike traditional fiat currency, which is controlled by central banks and governments, Bitcoin operates independently of any central authority. Transactions are verified and recorded on the blockchain, which is a distributed ledger that maintains a permanent and transparent record of all transactions. Bitcoin can be bought, sold, and exchanged on various cryptocurrency exchanges, and it can be used to purchase goods and services from merchants that accept Bitcoin as a form of payment. The supply of bitcoins is limited to 21 million units, and new bitcoins are created through mining, which involves using specialized computer hardware to solve complex mathematical equations. Bitcoin is known for its high volatility, and its value can fluctuate rapidly in response to market conditions, news events, and other factors. Many traders, including institutional investors, see Bitcoin as a store of value and a way to participate in the growing cryptocurrency ecosystem.",
    },
    {
      title: "Where to buy crypto?",
      content: "There are several ways to buy cryptocurrencies, including...",
    },
    {
      title: "Where to find cryptocurrency exchanges?",
      content:
        "Cryptocurrency exchanges are online platforms that allow users to buy, sell, and trade cryptocurrencies. Some popular cryptocurrency exchanges include Excelexchange, Binance, OKX, and Coinbase. These exchanges offer a wide range of trading pairs, including Bitcoin, Ethereum, Litecoin, and other cryptocurrencies. Users can browse the available trading pairs and make purchases...",
    },
    {
      title: "What is a cryptocurrency wallet?",
      content:
        "A cryptocurrency wallet is a computer application or device that allows users to store, send, and receive cryptocurrencies. Users can create and manage their own wallets, as well as use wallets provided by cryptocurrency exchanges. Some popular cryptocurrency wallets include MetaMask, Bitcoin.com, and Coinbase Wallet. Users can send cryptocurrencies to other wallets, as well as receive cryptocurrencies from other wallets, using the wallets' built-in wallet functionality or by scanning QR codes.",
    },
    {
      title: "What is a digital wallet?",
      content:
        "A digital wallet is a computer application or device that allows users to store, send, and receive cryptocurrencies. Users can create and manage their own digital wallets, as well as use digital wallets provided by cryptocurrency exchanges. Some popular digital wallets include Mycelium, Mycelium Wallet, and Mycelium Wallet Connect. Users can send cryptocurrencies to other wallets, as well",
    },

  ];

  return (
    <div className="border-y-gray-700 border-y-[0.6px] p-4 md:p-10">
      <div className="grid md:grid-cols-5 gap-5 max-w-7xl mx-auto justify-center md:w-[80%]">
        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold md:text-start text-center">
            Frequently Asked <br className="md:flex hidden" /> Questions
          </h1>
        </div>
        <div className="md:col-span-3 ">
          <Accordion collapseAll >
            {questions.map((item, index) => (
              <Accordion.Panel key={index}>
                <Accordion.Title>{item.title}</Accordion.Title>
                <Accordion.Content>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    {item.content}
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
            ))}
          </Accordion>
          <p className=" text-xl my-3">
            Have more questions?{" "}
            <span className="text-blue-800">Contact Us</span>
          </p>
        </div>
      </div>
    </div>
  );
}
