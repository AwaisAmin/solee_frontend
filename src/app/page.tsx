import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 sm:px-12 py-16 sm:py-24 text-center bg-background text-foreground">
      <main className="max-w-2xl space-y-8">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
          Welcome to Solee – Your Favorite Place for Shoes & More!
        </h1>

        <ol className="list-decimal list-inside text-sm sm:text-base text-left font-mono space-y-2">
          <li>Start shopping for shoes and slippers today!</li>
          <li>Stay tuned for more categories coming soon!</li>
        </ol>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button>Start Shopping</Button>
        </div>
      </main>
         </div>
  )
}
