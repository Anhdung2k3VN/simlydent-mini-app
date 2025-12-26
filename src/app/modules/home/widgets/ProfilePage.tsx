import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import BottomNavigation from "@/components/BottomNavigation";

type Gender = "female" | "male";

type ProfileForm = {
  fullName: string;
  phone: string;
  gender: Gender;
  dob: string; // dd/MM/yyyy
  address: string;
  avatarUrl?: string;
};

const ProfilePage: React.FC = () => {
  const navigate = useNavigate();

  // mock data (sau này thay bằng API)
  const initial = useMemo<ProfileForm>(
    () => ({
      fullName: "Nguyễn Thùy Linh",
      phone: "0912 345 678",
      gender: "female",
      dob: "20/10/1995",
      address: "123 Đường Nguyễn Huệ, Phường Bến Nghé, Quận 1, TP. Hồ Chí Minh",
      avatarUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAvlh3cjEGceg32L6cuw9AhXzKFSrmI6lDXQNO6lunngZoOdP0YAoL0YodfWhsSpC2Gxki9zg9batffWQc2u4l1KlVzKkou6wopSFtljie2kqNOz_QEcK_IZ41yN391ZPSNYX79v2L1HY2e1GPnlV6JmW6Li-TLToRGoqMcfNKrdHp7B19GcjTFJaIBxPMJ6XlmzIv7j0XNm0JPvhmC0c1FQitG6fXQPSJvnOGL_z4iESho1Loe8bCa1N_BhewPK5iPv2EBmccYwC0",
    }),
    []
  );

  const [form, setForm] = useState<ProfileForm>(initial);
  const [saving, setSaving] = useState(false);

  const set = <K extends keyof ProfileForm>(key: K, value: ProfileForm[K]) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const onSave = async () => {
    try {
      setSaving(true);
      // TODO: call API save profile
      console.log("SAVE PROFILE", form);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden max-w-md mx-auto bg-background shadow-xl font-display antialiased text-text-primary pb-24">
      {/* TopAppBar */}
      <div className="sticky top-0 z-10 flex items-center bg-background/95 backdrop-blur-sm p-4 pt-safe-top pb-2 justify-between border-b border-slate-200/50 dark:border-slate-800/50">
        <button
          onClick={() => navigate(-1)}
          className="flex size-10 shrink-0 items-center justify-center rounded-full active:bg-slate-200 dark:active:bg-slate-800 transition-colors"
        >
          <span className="material-symbols-outlined text-text-primary">
            arrow_back_ios_new
          </span>
        </button>
        <h2 className="text-text-primary text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-10">
          Thông tin cá nhân
        </h2>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 flex flex-col">
        {/* ProfileHeader */}
        <div className="flex p-6 flex-col items-center justify-center">
          <button
            type="button"
            className="relative group cursor-pointer"
            onClick={() => console.log("pick avatar")}
            aria-label="Đổi ảnh"
          >
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-32 w-32 shadow-lg border-4 border-white dark:border-slate-800 bg-slate-100 dark:bg-slate-800"
              style={{
                backgroundImage: form.avatarUrl
                  ? `url("${form.avatarUrl}")`
                  : undefined,
              }}
            />
            <div className="absolute bottom-0 right-1 bg-primary text-white p-2 rounded-full border-[3px] border-white dark:border-slate-800 shadow-sm flex items-center justify-center">
              <span className="material-symbols-outlined text-[20px]">
                photo_camera
              </span>
            </div>
          </button>
          <p className="mt-3 text-primary font-medium text-sm text-center">
            Chạm để đổi ảnh
          </p>
        </div>

        {/* Form Fields */}
        <div className="px-4 flex flex-col gap-5">
          {/* Name */}
          <label className="flex flex-col w-full">
            <p className="text-text-secondary text-sm font-medium leading-normal pb-2">
              Họ và tên
            </p>
            <input
              className="flex w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-surface text-text-primary h-12 px-4 text-base focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-slate-400"
              type="text"
              value={form.fullName}
              onChange={(e) => set("fullName", e.target.value)}
            />
          </label>

          {/* Phone */}
          <label className="flex flex-col w-full">
            <p className="text-text-secondary text-sm font-medium leading-normal pb-2">
              Số điện thoại
            </p>
            <input
              className="flex w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-surface text-text-primary h-12 px-4 text-base focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-slate-400"
              type="tel"
              value={form.phone}
              onChange={(e) => set("phone", e.target.value)}
            />
          </label>

          {/* Gender */}
          <div className="flex flex-col w-full">
            <p className="text-text-secondary text-sm font-medium leading-normal pb-2">
              Giới tính
            </p>
            <div className="flex gap-3">
              <label className="flex-1 cursor-pointer">
                <input
                  className="peer sr-only"
                  name="gender"
                  type="radio"
                  checked={form.gender === "female"}
                  onChange={() => set("gender", "female")}
                />
                <div className="flex items-center justify-center rounded-xl border border-slate-200 dark:border-slate-700 bg-surface py-3 peer-checked:bg-primary/10 peer-checked:border-primary peer-checked:text-primary transition-all">
                  <span className="material-symbols-outlined mr-2 text-[20px]">
                    female
                  </span>
                  <span className="font-medium">Nữ</span>
                </div>
              </label>

              <label className="flex-1 cursor-pointer">
                <input
                  className="peer sr-only"
                  name="gender"
                  type="radio"
                  checked={form.gender === "male"}
                  onChange={() => set("gender", "male")}
                />
                <div className="flex items-center justify-center rounded-xl border border-slate-200 dark:border-slate-700 bg-surface py-3 peer-checked:bg-primary/10 peer-checked:border-primary peer-checked:text-primary transition-all">
                  <span className="material-symbols-outlined mr-2 text-[20px]">
                    male
                  </span>
                  <span className="font-medium">Nam</span>
                </div>
              </label>
            </div>
          </div>

          {/* DOB */}
          <label className="flex flex-col w-full">
            <p className="text-text-secondary text-sm font-medium leading-normal pb-2">
              Ngày sinh
            </p>
            <div className="relative w-full">
              <input
                className="flex w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-surface text-text-primary h-12 pl-4 pr-12 text-base focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-slate-400"
                type="text"
                value={form.dob}
                onChange={(e) => set("dob", e.target.value)}
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none flex items-center">
                <span className="material-symbols-outlined">
                  calendar_month
                </span>
              </div>
            </div>
          </label>

          {/* Address */}
          <label className="flex flex-col w-full">
            <p className="text-text-secondary text-sm font-medium leading-normal pb-2">
              Địa chỉ
            </p>
            <textarea
              className="flex w-full min-h-[80px] rounded-xl border border-slate-200 dark:border-slate-700 bg-surface text-text-primary p-4 text-base focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none placeholder:text-slate-400"
              placeholder="Nhập địa chỉ của bạn"
              value={form.address}
              onChange={(e) => set("address", e.target.value)}
            />
          </label>
        </div>
      </div>

      {/* Save Button & Nav */}
      <div className="p-4 pb-24">
        <button
          onClick={onSave}
          disabled={saving}
          className="w-full h-12 bg-primary hover:bg-sky-500 active:bg-sky-600 disabled:opacity-70 disabled:cursor-not-allowed text-white rounded-xl font-bold text-base shadow-lg shadow-primary/30 transition-all flex items-center justify-center gap-2"
        >
          <span className="material-symbols-outlined text-[20px]">save</span>
          {saving ? "Đang lưu..." : "Lưu thay đổi"}
        </button>
      </div>

      <BottomNavigation />
    </div>
  );
};


export default ProfilePage;
