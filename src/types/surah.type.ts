export interface Surah {
  audio: string;
  description: string;
  name: string;
  number: number;
  numberOfAyahs: number;
  revelation: string;
  translation: string;
}

export interface Audio {
  ahmedajamy: string;
  alafassy: string;
  husarymujawwad: string;
  minshawi: string;
  muhammadayyoub: string;
  muhammadjibreel: string;
}

export interface Ayah {
  arab: string;
  audio: Audio;
  image: {
    primary: string;
    secondary: string;
  };
  meta: {
    hizb: number;
    juz: number;
    manzil: number;
    page: number;
    ruku: number;
    sajda: {
      obligatory: boolean;
      recommended: boolean;
    };
  };
  number: {
    inQuran: number;
    inSurah: number;
  };
  tafsir: {
    jalalayn: string;
    kemenag: {
      long: string;
      short: string;
    };
    quraish: string;
  };
  translation: string;
}

export interface DetailSurah extends Surah {
  ayahs: Ayah[];
  bismillah: {
    arab: string;
    audio: Audio;
    translation: string;
  };
}
