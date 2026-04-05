import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 px-4">
      <div className="text-center max-w-lg animate-fade-in">
        {/* Large 404 */}
        <h1 className="text-8xl sm:text-9xl font-extrabold text-gradient mb-2 select-none">
          404
        </h1>

        {/* Subtitle */}
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
          Page Not Found
        </h2>

        <p className="text-muted-foreground text-base sm:text-lg mb-8 leading-relaxed">
          The page <code className="px-2 py-0.5 bg-muted rounded text-sm font-mono text-primary">{location.pathname}</code> doesn't exist or has been moved.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-gradient-primary hover:shadow-medium transition-all duration-300 font-semibold"
          >
            <a href="/">
              <Home className="h-5 w-5 mr-2" />
              Back to Home
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 font-semibold"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Go Back
          </Button>
        </div>

        {/* Decorative floating dots */}
        <div className="relative mt-16">
          <div className="absolute -top-8 left-1/4 w-3 h-3 bg-primary/30 rounded-full animate-float"></div>
          <div className="absolute -top-4 right-1/3 w-2 h-2 bg-secondary/40 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute -top-12 right-1/4 w-4 h-4 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
