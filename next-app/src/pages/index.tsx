import { Button, Collapse, Container } from "@mui/material";
import Navbar from "../components/navbar";
import picwish from "../images/picwish.png";
import processGroup from "../images/Group 1261152714 .png";
import whyChoose from "../images/Group 1321314633.png";
import heroGroup from "../images/Group 8303.png";
import footerGroup from "../images/Group 1321314632.png";
import Logo from "../components/logo";
import { useEffect, useState } from "react";

export default function Home() {
  const data1 = [
    {
      header: "Robux Bought",
      content:
        "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et mattis dolor, ut",
    },
    {
      header: "Robux Sold",
      content:
        "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et mattis dolor, ut ",
    },
  ];
  const data2 = [
    {
      label: "lorem ipsum"
    },
{
      label: "lorem ipsum"
    },
{
      label: "lorem ipsum"
    },
  ]
  const data3 = [
    {
      id: 0,
      imgSrc: "https://images.unsplash.com/photo-1601412436009-d964bd02edbc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
      name: "Necia Johnson",
      byline: "CEO and Co-Founder, Mozzaz",
      review: "review 1",
    },
    {
      id: 1,
      imgSrc: "https://images.unsplash.com/photo-1601412436009-d964bd02edbc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
      name: "Johnson",
      byline: "CEO and Co-Founder, Mozzaz",
      review: "review 2",
    },
  ]
  const [review, setReview] = useState(data3[0])
  useEffect(() => {
    console.log(review)
  }, [review])
  return (
    <div className="bg-[#0d141a] w-full min-h-screen relative">
      <img src={heroGroup.src} className="w-full object-contain absolute" />
      <Container>
        <div className="min-h-screen relative z-10">
          <Navbar />
          <div className="h-[calc(100%-14px)] flex flex-col justify-between items-center py-12">
            <div className="">
              <img src={picwish.src} className="h-[400px] relative z-10" />
            </div>
            <p className="text-6xl w-2/3 my-4 text-white text-center font-bold">
              #1 headquarters to buy and sell robux
            </p>
            <div className="my-4">
              <Button
                className="rounded-lg bg-primary-main"
                variant="contained"
              >
                {" "}
                buy roblox{" "}
              </Button>
              <Button className="rounded-lg text-white ml-4">
                {" "}
                sell roblox{" "}
              </Button>
            </div>
          </div>
        </div>
      </Container>
      <img className="object-contain w-full" src={whyChoose.src} />
      <Container>
        <div className="min-h-screen flex flex-col justify-around py-12">
          <p className="text-white uppercase my-12 text-5xl text-center">
            {" "}
            our process{" "}
          </p>
          <img className="my-12" src={processGroup.src} />
        </div>
        </Container>
        <div className="w-full h-[400px] relative">
          <img src={footerGroup.src} className="w-full h-full object-fill absolute"/>
          <div className="relative z-10 w-full flex flex-col items-center justify-around h-full">
            <div className="w-1/2 bg-[#192026] h-[200px] border-2 border-primary-main rounded relative z-20 p-4">
             <div className="flex">
                <img src={review.imgSrc} className="w-12 h-12 rounded-full mx-2"/> 
                <div>
                  <p className="text-white text-xl"> {review.name} </p>
                  <p className="text-white text-lg"> {review.byline} </p>
                </div>
             </div> 
             <div>
              <p className="text-white">
                {review.review}
              </p>
             </div>
            </div>
            <div className="w-1/2 h-[200px] absolute bg-[#0f2523] top-[20%] left-[27%]"></div>
            <div className="flex">
             {data3.map(( _ , i) => <div onClick={() => setReview(data3.find(data => data.id === i)!)} className={`w-4 cursor-pointer h-4 rounded-full mx-2 ${review.id === i ? "bg-primary-main scale-150" : "border-2 border-primary-main"}`} key={i}>
            </div>)} 
            </div>
          </div>
        </div>
        <Container>
        <div className="flex py-12 w-full">
          <div className="w-1/2 min-h-[300px] my-12">
            <p className="my-4 text-white font-bold text-6xl"> Lorem Ipsum </p>
            <p className="text-white w-3/4">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.{" "}
            </p>
            <p className="text-xl mt-4 text-white"> Available Robux </p>
            <p className="text-white font-bold text-3xl"> 2240+ </p>
          </div>
          <div className="flex w-1/2 h-full items-center">
            {data1.map((data, i) => (
              <div
                className="relative flex flex-col rounded px-4 py-12 mx-2 w-1/2 justify-around"
                key={i}
              >
                <div className="absolute top-0 bottom-0 left-0 right-0 bg-white bg-opacity-[5%]">
                  {" "}
                </div>
                <p className="text-white text-center text-2xl font-bold my-2">
                  {" "}
                  {data.header}{" "}
                </p>
                <p className="text-white text-center"> {data.content} </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
      <div className="w-full relative">
        <img src={footerGroup.src} className="absolute object-contain w-full" />
        <div className="relative z-10 w-full">
          <Container className="flex min-h-[250px]">
            <div className="p-4 w-1/3 flex flex-col justify-around">
              <Logo />
              <div className="text-white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              </div>
            </div>
            <div className="flex flex-col w-1/3 p-4 justify-around">
              <p className="text-xl text-white text-center"> Contact Info </p>
              <p className="text-white"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut l </p>
              <p className="text-white"> +911234567890 </p>
              <p className="text-white"> Lorem ipsum dolor sit </p>
            </div>
            <div className="flex flex-col w-1/3 p-4 justify-around items-center">
              <p className="text-white text-xl text-center"> Quick Links </p>
              {data2.map((data, i) => <div key={i}>
                <p className="text-white"> {data.label} </p>
              </div>)}
            </div>
          </Container>
          <Container>
            <div className="bg-gray-50 mt-16 w-full h-[1px]"></div>
          </Container>
            <p className="text-gray-50 text-sm text-center my-4">
              Copyright 2022, All Right Reserved
            </p>
        </div>
      </div>
    </div>
  );
}
