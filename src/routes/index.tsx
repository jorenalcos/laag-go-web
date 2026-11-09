import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("../pages/HomePage"));
const ToursPage = lazy(() => import("../pages/ToursPage"));
const ItinerariesPage = lazy(() => import("../pages/ItinerariesPage"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));

function PageLoader() {
  return (
    <div
      className="flex min-h-screen items-center justify-center"
      role="status"
      aria-live="polite"
    >
      <div className="flex flex-col items-center gap-3">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-teal-700" />
        <p className="text-sm text-slate-500">Loading LaagGo...</p>
      </div>
    </div>
  );
}

function AppRoutes() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tours" element={<ToursPage />} />
        <Route path="/itineraries" element={<ItinerariesPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;