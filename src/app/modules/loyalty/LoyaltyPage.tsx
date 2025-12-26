import React from "react";
import { useNavigate } from "react-router-dom";
import BottomNavigation from "@/components/BottomNavigation";

type Offer = {
  id: string;
  type: string; // Ví dụ: "Voucher Dịch Vụ"
  title: string;
  expiry: string; // Ví dụ: "30/10/2023"
  image?: string;
  hot?: boolean;
};

const OFFERS: Offer[] = [
  {
    id: "1",
    type: "Voucher Dịch Vụ",
    title: "Giảm 50% Lấy cao răng & Đánh bóng",
    expiry: "30/10/2023",
    hot: true,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDw8j9WdUXgdftGY2rgZuEtUL6T-mLEYH9DrceU8vhW44-YnFBfuuAHmo_isQzs-n5z9eUqqHT0GSrbBplp6hCxvedlB1SqKOXe0dgJhOMGa_nrK51tRoYqiyFUOEwis93mELDRaI46_X0dHZXnCia36SzxqB8Uc4LOEUcK2WNIGBfmf3PifLhpvhiFtKgd3fsxGuSbwWq2zPwyOwHhrE-B-T4Tr4IOxDzx8_NHZfaiAAimxpElI56_gK9levfoT5Da36u0JDYvLuc",
  },
  {
    id: "2",
    type: "Voucher Niềng Răng",
    title: "Voucher 200k cho dịch vụ niềng răng mắc cài",
    expiry: "12/12/2023",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBPIxp3utoGO_EyANvy-GAg8boNSg--a51t0-ZJZxloN-CT4oj1g8K44C2U6ncBHFliNE7x9p1Ll-Xi4EHTXtg8NPL4xB8IO61Lewbh7eewStFPKCbWcgxSGbyjT8V8yVDxQ6vgMrVrX7uJ-28EW4M4KZH766JZ3eMdvMyiLt9EHgcU38-5LnlVbGbJCBSOvrrDxWMpzHiuyKcGoFMBKvMKhFnx_jw6GEgMaxxnSVvBjbG-YR_kFA6JPDjqtxNRSgkY_elFZ6TVVkw",
  },
  {
    id: "3",
    type: "Ưu đãi đặc biệt",
    title: "Miễn phí chụp X-Quang Panorama",
    expiry: "31/12/2023",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDOI_GyG5N2Z4SFuRyuKBeyDJiACIgIKqszoxMjkgy3jTyne7Q5QgunqEQrP4ib80MrZNTonWK-fskbfKDajVc0BydsK0z8nhB-pGxw2Y7mxtWsjEMbAyxUee8VYIm46k6Eq8Q5Sg71ZTLxrFqbKfVeX2Y3lVb6WI6dLYa-6hAUUanc2EeQDYwV2ko3NEfHtTi54YhgDJ0gGFw3q795K3p6gEC8llM39bhI4V7ptolqcEGRTOqS24nJrsrlPiYhitC_gAzMGUEPLBs",
  },
];

const LoyaltyPage: React.FC = () => {
  const navigate = useNavigate();

  const handleClaim = (offer: Offer) => {
    // TODO: call API claim voucher
    console.log("CLAIM_OFFER:", offer);
  };

  return (
    <div className="relative flex h-full min-h-screen w-full flex-col bg-background-light dark:bg-background-dark font-display antialiased">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center p-4 pt-safe-top pb-3 justify-between max-w-md mx-auto w-full">
          <button
            onClick={() => navigate(-1)}
            className="flex size-10 items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <span className="material-symbols-outlined text-2xl">
              arrow_back
            </span>
          </button>

          <h2 className="text-lg font-bold tracking-[-0.015em]">Ưu đãi</h2>

          <div className="flex size-10" />
        </div>
      </div>

      {/* Content */}
      <main className="flex-1 w-full max-w-md mx-auto flex flex-col pb-28 overflow-x-hidden">
        <div className="p-4 flex flex-col gap-4">
          {OFFERS.map((o) =>
            o.id === "3" ? (
              <PromoCard key={o.id} offer={o} onClaim={() => handleClaim(o)} />
            ) : (
              <OfferCard key={o.id} offer={o} onClaim={() => handleClaim(o)} />
            )
          )}
        </div>
      </main>

      <BottomNavigation />
    </div>
  );
};

export default LoyaltyPage;

/* ---------- UI Components ---------- */



const OfferCard = ({
  offer,
  onClaim,
}: {
  offer: Offer;
  onClaim: () => void;
}) => (
  <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-3 shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col gap-3 active:scale-[0.99] transition-transform">
    <div className="flex items-start gap-4">
      <div className="relative shrink-0">
        <div
          className="w-[72px] h-[72px] rounded-lg bg-slate-100 dark:bg-slate-800 bg-cover bg-center"
          style={{
            backgroundImage: offer.image ? `url('${offer.image}')` : undefined,
          }}
        />
        {offer.hot && (
          <div className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full shadow-sm">
            HOT
          </div>
        )}
      </div>

      <div className="flex-1 min-w-0">
        <p className="text-xs font-medium uppercase tracking-wide text-text-sec-light dark:text-text-sec-dark mb-0.5">
          {offer.type}
        </p>
        <h3 className="text-base font-bold leading-tight line-clamp-2 text-text-main-light dark:text-text-main-dark">
          {offer.title}
        </h3>
        <div className="flex items-center gap-1 text-xs text-text-sec-light dark:text-text-sec-dark mt-2">
          <span className="material-symbols-outlined text-sm">schedule</span>
          <span>HSD: {offer.expiry}</span>
        </div>
      </div>
    </div>

    <div className="h-px bg-slate-100 dark:bg-slate-700 w-full" />

    <button
      onClick={onClaim}
      className="w-full bg-primary hover:bg-primary/90 text-white text-sm font-bold py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2"
    >
      <span className="material-symbols-outlined text-[18px]">
        card_giftcard
      </span>
      Lấy ngay
    </button>
  </div>
);

const PromoCard = ({
  offer,
  onClaim,
}: {
  offer: Offer;
  onClaim: () => void;
}) => (
  <div className="bg-surface-light dark:bg-surface-dark rounded-xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800 active:scale-[0.99] transition-transform">
    <div
      className="h-32 bg-cover bg-center relative"
      style={{
        backgroundImage: offer.image ? `url('${offer.image}')` : undefined,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      <div className="absolute bottom-3 left-3 right-3 text-white">
        <p className="text-xs font-medium opacity-90 mb-0.5">{offer.type}</p>
        <h3 className="text-lg font-bold leading-tight">{offer.title}</h3>
      </div>
    </div>

    <div className="p-3 flex items-center justify-between gap-3">
      <div className="flex items-center gap-1 text-xs text-text-sec-light dark:text-text-sec-dark">
        <span className="material-symbols-outlined text-sm">schedule</span>
        <span>HSD: {offer.expiry}</span>
      </div>

      <button
        onClick={onClaim}
        className="bg-primary hover:bg-primary/90 text-white text-sm font-bold py-2 px-4 rounded-lg transition-colors"
      >
        Lấy ngay
      </button>
    </div>
  </div>
);
