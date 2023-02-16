import React from "react";
import ReactDOM from "react-dom/client";
import Cards from "./Components/Cards/Cards";
import Header from "./Components/Header/Header";
import "./sass/index.scss";
import img1 from "./assets/Section1.png";
import img2 from "./assets/Section2.png";
import img3 from "./assets/Section3.png";
import img4 from "./assets/Section4.png";
import Footer from "./Components/Footer/Footer";
import Section from "./Components/Section/Section";
import Instruction from "./Components/Instruction/Instruction";
const Sections = [
  {
    id: 1,
    image: img1,
    name: "Gear",
    title: "Build a drool-worthy studio, affordably.",
    subTitle:
      "The industry’s top software, all in one place, on payment plans built to work for you.",
    text: "Explore Gear",
    option:1
  },
  {
    id: 2,
    image: img2,
    name: "Connected Experience",
    title: "A workflow that actually flows.",
    subTitle:
      "Preview samples in your track’s key and tempo, drag and drop sounds into your DAW, and organize your favorite samples, MIDI and presets in one place.",
    option:0,
    text:"Discover"
  },
  {
    id: 3,
    image: img3,
    name: "Gear",
    title: "Build a drool-worthy studio, affordably.",
    subTitle:
      "The industry’s top software, all in one place, on payment plans built to work for you.",
    option:1,
    text:"Explore Gear"
  },
  {
    id: 4,
    image: img4,
    name: "Technology",
    title: "Crate dig without the dust.",
    subTitle:
      "Our intelligent search tools help you discover sounds you would normally have to dig to find. Tech breaks the sweat, not you.",
    text: "Discover CoSo",
    option:0
  },
];
const Card = [
  {
    id:1,
    image:"https://s3-alpha-sig.figma.com/img/b716/fb16/9f1f863597d1e56e34da7324ec9a5a52?Expires=1677456000&Signature=T5Pi4GQA99LFyoWwG3Zp~LzSuyqX4DKfg62PbmekYafKkVBoSnvTOmjrr7JojfJQ1OcTfkqxGPQq0agZJJLRK7BPEka8An0tfYl58DEAU0OUAjv0Qjl2aSDOlLeZA3~VTcFFHODZjwRBJS4~9F4wNABhPTPQmjyp8sIpuwOiGhxnfYdS1BurUrVklmw29kteHD~FunvJrY4WN7NNIwlASgivyfEL1FpJGbSJ5TLskihggj~0eyNZOj4Kw4ldfbBlQjneQilPRZ3xWuAo3M6ldv2dxe6lmha~2uEUWXbIyLblEaVZFXmCZh9PXKAQdap6-~XVoQDzspfDqPZSkKHzoQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    text:"I can always find what I’m looking for on Splice, whether it’s the exact sound I want or just a bit of inspiration.",
    name:"Andrew Huang"
  },
  {
    id:2,
    image:"https://s3-alpha-sig.figma.com/img/0a9d/ebf8/cb1c6fb5857c3719cd0104036bfbfe92?Expires=1677456000&Signature=lv2Qgc-6b5ulBnv0TfhQBEq9z2cnCRkp69heh5PKlrJ8E8wRDtn1ViaqRbd~CYoSPVf5K9FpbaO~ltSzdhzzL5t3HgN0DBjGsxYZ94KYGIxQPVP4QrVjANm05Yh33fib~iKhOiyVcFlJKhTvHTzkDIE4AFhKxrnQqyAqF0MzQjZifrh~976Bn7D4fmGD-GkzXFGb8xGAsUq-23hWPdUUfV7x4HaN~stUgddJ5oiunymKp1oeDo-93UgpDfzJOo2ZWqCoC4-mnq~GJa59SByNrwLUvY3c960u3GXe0sUDghkQ6aOTZtXdv7LvzrG~jrn8gaEMbvoj--~2l3YDON9Elg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    text:"Finally a way to buy plugins that works. By paying a little at a time, producers can get legit access to the top VSTs.",
    name:"KSHMR"
  },{
    id:3,
    image:"https://s3-alpha-sig.figma.com/img/07ba/3e55/6786e9d5ff15298ba5cc9f42eeee5b83?Expires=1677456000&Signature=npOR2aiGljCqaLrujtoKHUbpcZYZCPXIW7ZkGy2esRDfEHxjEyYVcG~OO-AZVvL6odcBtuXBpXqTmPeiwW-J7fIRVLjAojRo8dppweonPg9w0gxm-XIK~dSnM3kXMXT5Tn3At1v4KoFfsZ7Ob7~kLlGVdUYNJTybDplRRe5fsN49addyOKrNBuDnqu6Yd2GRdjUkPpjf4wIsGVsLHrQHVGdIkMwePqC2gKOW5U6lV53utM9wPyBZPCIGb5e~hFvTGECulAFl7fXjeG73WoA4qhNX0969WgiNGfp8opCSwNTrKxAKaDstQ9wdb5d5EAwdClIUJnQmZgDsttf2lNC6wA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    text:"It’s been fun to dive into Splice’s creator community and explore tools that support my own creative process.",
    name:"Kesha Lee"
  }
]
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header></Header>
    {Sections.map((item)=>(
      <Section key={item.id} option={item.option} image={item.image} name={item.name} title={item.title} subTitle={item.subTitle} text={item.text}></Section>
    ))}
    <Cards list = {Card}></Cards>
    <Instruction></Instruction>
    <Footer></Footer>
  </React.StrictMode>
);
