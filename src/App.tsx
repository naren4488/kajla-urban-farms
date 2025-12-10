import Header from "./components/layout/Header";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16 md:pt-20">
        {/* Temporary content to see header */}
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold mb-4">Header Preview</h1>
          <p className="text-muted-foreground">
            This is temporary content to view the header. The header is fixed at the top.
          </p>
          <div className="mt-8 space-y-4">
            <p>Try resizing the browser to see the mobile menu (hamburger icon).</p>
            <p>On desktop, you should see the navigation bar with dropdown menu for "Project Gallery".</p>
          </div>
        </div>
      </main>
    </div>
  );
}
