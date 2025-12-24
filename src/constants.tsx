
import React from 'react';
import { Appointment, MedicalRecord } from './types';

export const DUMMY_APPOINTMENTS: Appointment[] = [
  {
    id: 'APT-2023-01',
    doctor: 'BS. Nguyễn Văn A',
    specialty: 'Chuyên khoa Chỉnh nha',
    location: 'SimlyDent CS1 - Quận 1',
    time: '14:00',
    date: '12/10/2023',
    status: 'confirmed',
    service: 'Nhổ răng khôn',
    image: 'https://picsum.photos/200/300?random=1',
    price: '500.000đ'
  },
  {
    id: 'APT-2023-02',
    doctor: 'BS. Trần Thị B',
    specialty: 'Răng Hàm Mặt',
    location: 'SimlyDent CS2 - Quận 3',
    time: '09:00',
    date: '15/10/2023',
    status: 'pending',
    service: 'Cạo vôi răng',
    image: 'https://picsum.photos/200/300?random=2',
    price: '300.000đ'
  },
  {
    id: 'APT-2023-03',
    doctor: 'BS. Lê Văn C',
    specialty: 'Nha khoa tổng quát',
    location: 'SimlyDent CS1 - Quận 1',
    time: '10:30',
    date: '20/10/2023',
    status: 'confirmed',
    service: 'Tái khám niềng răng',
    image: 'https://picsum.photos/200/300?random=3',
    price: '200.000đ'
  }
];

export const DUMMY_RECORDS: MedicalRecord[] = [
  {
    id: 'REC-01',
    title: 'Cạo vôi răng & Đánh bóng',
    doctor: 'BS. Nguyễn Văn A',
    date: '12 Th08, 2023',
    summary: 'Vệ sinh tốt, nướu hồng hào. Không phát hiện sâu răng mới. Hẹn tái khám sau 6 tháng.',
    type: 'dentistry'
  },
  {
    id: 'REC-02',
    title: 'Tái khám niềng răng',
    doctor: 'BS. Trần Thị B',
    date: '15 Th07, 2023',
    summary: 'Thay dây cung số 16. Răng di chuyển đúng phác đồ. Bệnh nhân cần chú ý vệ sinh kẽ răng.',
    type: 'orthopedics'
  },
  {
    id: 'REC-03',
    title: 'Nhổ răng khôn (R8)',
    doctor: 'BS. Lê Văn C',
    date: '02 Th01, 2023',
    summary: 'Nhổ răng 48 mọc lệch. Kê đơn thuốc kháng sinh và giảm đau 5 ngày.',
    type: 'surgery'
  }
];
