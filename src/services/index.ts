import instance from "../lib/axios/instance";

const quranServices = {
  getAllSurah: () => instance.get("/surahs"),
  getDetailSurah: (nomorSurah: string) => instance.get(`/surahs/${nomorSurah}`),
  getAllAyahs: (nomorSurah: string) =>
    instance.get(`/surahs/${nomorSurah}/ayahs`),
  getDetailAyah: (nomorSurah: string, ayah: string) =>
    instance.get(`/surahs/${nomorSurah}/ayahs/${ayah}`),
};

export default quranServices;
