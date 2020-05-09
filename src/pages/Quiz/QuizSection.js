import React from 'react';
import { LeftSection as QuizSectionLayout } from '../../components/LayoutSection';
import {
  Topic,
  SubTopic,
  Text,
  CodeBox,
  CodeText,
  SubTitle,
} from '../../components/contentComponent';

const QuizSection = () => {
  return (
    <QuizSectionLayout>
      <Topic>Kuis | Array</Topic>
      <SubTopic>Rotasi Matriks</SubTopic>
      <SubTitle>Deskripsi</SubTitle>
      <Text>
        Pak Dengklek memberikan Anda sebuah matriks berukuran N × M. Cetak
        kembali matriks tersebut setelah diputar 90 derajat searah jarum jam.
      </Text>
      <SubTitle>Format Masukan</SubTitle>
      <Text>
        Baris pertama berisi dua buah bilangan bulat N dan M. N baris berikutnya
        masing-masing berisi M buah bilangan bulat, yang menyatakan
        elemen-elemen matriks tersebut.
      </Text>
      <SubTitle>Format Keluaran</SubTitle>
      <Text>
        Sebuah matris berukuran M × N dengan format seperti masukan yang
        merupakan matriks yang sudah diputar.
      </Text>
      <SubTitle>Contoh Masukan</SubTitle>
      <CodeBox>
        <CodeText>4 3</CodeText>
        <CodeText>34 87 15</CodeText>
        <CodeText>66 71 52</CodeText>
        <CodeText>47 47 48</CodeText>
        <CodeText>45 75 35</CodeText>
      </CodeBox>
      <SubTitle>Contoh Keluaran</SubTitle>
      <CodeBox>
        <CodeText>45 47 66 34</CodeText>
        <CodeText>75 47 71 87</CodeText>
        <CodeText>35 48 52 15</CodeText>
      </CodeBox>
    </QuizSectionLayout>
  );
};

export default QuizSection;
