import React from "react";
import { useNavigate, useParams } from "react-router-dom";

type ServiceItem = {
  id: string;
  title: string;
  subtitle?: string;
  priceText: string;
  icon: string;
};

type PrescriptionItem =
  | { type: "medicine"; name: string; note: string }
  | { type: "instruction"; title: string; bullets: string[] };

export type MedicalRecordDetail = {
  code: string;
  statusText: string;
  doctorName: string;
  dateTimeText: string;
  doctorAvatar?: string;

  services: ServiceItem[];
  totalText: string;

  diagnosis: string;
  doctorNote: string;

  prescriptions: PrescriptionItem[];
};

type Props = {
  record?: MedicalRecordDetail;
  onContact?: () => void;
  onRebook?: () => void;
};

const MedicalRecordDetailPage: React.FC<Props> = ({
  record: recordFromProps,
  onContact,
  onRebook,
}) => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  // TODO: thay bằng fetch API theo id
  const record = recordFromProps ?? mockGetRecordById(id);

  if (!record) {
    return (
      <div className="p-4 max-w-lg mx-auto">
        <button
          className="px-3 py-2 rounded-lg border"
          onClick={() => navigate(-1)}
        >
          Quay lại
        </button>
        <p className="mt-3">Không tìm thấy hồ sơ.</p>
      </div>
    );
  }

  return (
    <div className="relative flex flex-col h-auto min-h-screen w-full overflow-x-hidden pb-24 bg-background-light dark:bg-background-dark font-display text-text-main-light dark:text-text-main-dark antialiased selection:bg-primary/30">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center p-4 justify-between max-w-lg mx-auto w-full">
          <button
            onClick={() => navigate(-1)}
            className="flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
          >
            <span
              className="material-symbols-outlined text-text-main-light dark:text-text-main-dark"
              style={{ fontSize: 24 }}
            >
              arrow_back_ios_new
            </span>
          </button>
          <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-10">
            Chi tiết Hồ sơ khám
          </h2>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 w-full max-w-lg mx-auto p-4 flex flex-col gap-6">
        {/* Summary Card */}
        <div className="flex flex-col gap-4 rounded-xl bg-surface-light dark:bg-surface-dark p-4 shadow-sm border border-slate-100 dark:border-slate-800">
          <div className="flex items-start justify-between gap-4">
            <div className="flex flex-col gap-1.5 flex-[2_2_0px]">
              <div className="inline-flex items-center gap-1.5">
                <span className="px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-900/30 text-primary text-xs font-semibold uppercase tracking-wide">
                  {record.statusText}
                </span>
              </div>

              <p className="text-text-sec-light dark:text-text-sec-dark text-sm font-medium">
                Mã hồ sơ:{" "}
                <span className="text-text-main-light dark:text-text-main-dark font-bold">
                  {record.code}
                </span>
              </p>

              <h3 className="text-lg font-bold leading-tight mt-1">
                {record.doctorName}
              </h3>

              <div className="flex items-center gap-2 text-text-sec-light dark:text-text-sec-dark text-sm mt-1">
                <span className="material-symbols-outlined text-[18px]">
                  calendar_month
                </span>
                <span>{record.dateTimeText}</span>
              </div>
            </div>

            <div
              className="size-20 bg-center bg-no-repeat bg-cover rounded-xl shrink-0 border border-slate-100 dark:border-slate-700 shadow-sm bg-slate-100 dark:bg-slate-800"
              style={{
                backgroundImage: record.doctorAvatar
                  ? `url("${record.doctorAvatar}")`
                  : undefined,
              }}
            />
          </div>
        </div>

        {/* Services */}
        <section>
          <h3 className="text-text-main-light dark:text-text-main-dark text-lg font-bold leading-tight px-1 mb-3 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">
              dentistry
            </span>
            Dịch vụ đã thực hiện
          </h3>

          <div className="bg-surface-light dark:bg-surface-dark rounded-xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800 divide-y divide-slate-100 dark:divide-slate-800">
            {record.services.map((s) => (
              <div
                key={s.id}
                className="flex items-center gap-4 px-4 py-4 justify-between"
              >
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="flex items-center justify-center rounded-lg bg-primary/10 shrink-0 size-10 text-primary">
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: 20 }}
                    >
                      {s.icon}
                    </span>
                  </div>

                  <div className="flex flex-col overflow-hidden">
                    <p className="text-text-main-light dark:text-text-main-dark text-base font-semibold truncate">
                      {s.title}
                    </p>
                    {!!s.subtitle && (
                      <p className="text-text-sec-light dark:text-text-sec-dark text-xs truncate">
                        {s.subtitle}
                      </p>
                    )}
                  </div>
                </div>

                <div className="shrink-0">
                  <p className="text-text-main-light dark:text-text-main-dark text-base font-semibold">
                    {s.priceText}
                  </p>
                </div>
              </div>
            ))}

            <div className="flex items-center justify-between px-4 py-3 bg-slate-50 dark:bg-slate-800/50">
              <p className="text-text-sec-light dark:text-text-sec-dark text-sm font-medium">
                Tổng cộng
              </p>
              <p className="text-primary text-lg font-bold">
                {record.totalText}
              </p>
            </div>
          </div>
        </section>

        {/* Diagnosis & Notes */}
        <section>
          <h3 className="text-text-main-light dark:text-text-main-dark text-lg font-bold leading-tight px-1 mb-3 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">
              clinical_notes
            </span>
            Chẩn đoán &amp; Ghi chú
          </h3>

          <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-4 shadow-sm border border-slate-100 dark:border-slate-800">
            <div className="flex gap-3">
              <div className="w-1 rounded-full bg-amber-400 shrink-0 h-auto" />
              <div className="flex flex-col gap-1">
                <h4 className="text-sm font-bold text-text-main-light dark:text-text-main-dark uppercase tracking-wider opacity-70">
                  Chẩn đoán
                </h4>
                <p className="text-text-main-light dark:text-text-main-dark text-base leading-relaxed">
                  {record.diagnosis}
                </p>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 flex gap-3">
              <div className="w-1 rounded-full bg-blue-400 shrink-0 h-auto" />
              <div className="flex flex-col gap-1">
                <h4 className="text-sm font-bold text-text-main-light dark:text-text-main-dark uppercase tracking-wider opacity-70">
                  Ghi chú bác sĩ
                </h4>
                <p className="text-text-main-light dark:text-text-main-dark text-base leading-relaxed">
                  {record.doctorNote}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Prescription */}
        <section>
          <h3 className="text-text-main-light dark:text-text-main-dark text-lg font-bold leading-tight px-1 mb-3 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">
              prescriptions
            </span>
            Toa thuốc / Chỉ dẫn
          </h3>

          <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-5 shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col gap-4">
            {record.prescriptions.map((p, idx) => {
              if (p.type === "medicine") {
                return (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-green-500 mt-0.5 text-xl">
                      pill
                    </span>
                    <div className="flex-1">
                      <p className="font-bold text-text-main-light dark:text-text-main-dark">
                        {p.name}
                      </p>
                      <p className="text-sm text-text-sec-light dark:text-text-sec-dark mt-0.5">
                        {p.note}
                      </p>
                    </div>
                  </div>
                );
              }

              return (
                <div key={idx} className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-blue-500 mt-0.5 text-xl">
                    info
                  </span>
                  <div className="flex-1">
                    <p className="font-bold text-text-main-light dark:text-text-main-dark">
                      {p.title}
                    </p>
                    <ul className="list-disc list-outside pl-4 text-sm text-text-sec-light dark:text-text-sec-dark mt-1 space-y-1">
                      {p.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>

      {/* Bottom Actions */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-surface-light dark:bg-surface-dark border-t border-slate-200 dark:border-slate-800 p-4 pb-8 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
        <div className="max-w-lg mx-auto w-full flex gap-3">
          <button
            onClick={onContact}
            className="flex-1 h-12 flex items-center justify-center rounded-lg border border-primary text-primary bg-transparent font-bold text-base hover:bg-primary/5 active:bg-primary/10 transition-colors"
          >
            Liên hệ
          </button>
          <button
            onClick={onRebook}
            className="flex-1 h-12 flex items-center justify-center rounded-lg bg-primary text-white font-bold text-base shadow-lg shadow-primary/30 hover:bg-primary/90 active:scale-[0.98] transition-all"
          >
            Đặt lịch tái khám
          </button>
        </div>
      </div>
    </div>
  );
};

export default MedicalRecordDetailPage;

// ---- demo mock, thay bằng call API ----
function mockGetRecordById(id?: string): MedicalRecordDetail | undefined {
  if (!id) return undefined;
  return {
    code: `#SD-${id}`,
    statusText: "Đã hoàn thành",
    doctorName: "BS. Nguyễn Văn A",
    dateTimeText: "12/10/2023 - 09:30",
    services: [
      {
        id: "1",
        title: "Cạo vôi răng",
        priceText: "300.000đ",
        icon: "cleaning_services",
      },
      {
        id: "2",
        title: "Trám răng",
        subtitle: "Răng số 16",
        priceText: "500.000đ",
        icon: "dentistry",
      },
    ],
    totalText: "800.000đ",
    diagnosis: "Viêm nướu nhẹ, cần vệ sinh răng miệng kỹ.",
    doctorNote: "Tái khám sau 6 tháng. Tránh đồ ngọt trong 48h.",
    prescriptions: [
      {
        type: "medicine",
        name: "Paracetamol 500mg",
        note: "Uống khi đau, tối đa 2 viên/ngày.",
      },
      {
        type: "instruction",
        title: "Chỉ dẫn",
        bullets: ["Súc miệng nước muối ấm 2 lần/ngày", "Chải răng nhẹ nhàng"],
      },
    ],
  };
}
