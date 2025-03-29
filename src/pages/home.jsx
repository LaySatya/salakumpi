import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  // Set target date to April 14, 2025
  const targetDate = new Date("2025-04-14").getTime();

  // State to store countdown values
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Function to calculate remaining time
  function getTimeLeft() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  }

  // Update countdown every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Time units with Khmer labels
  const timeUnits = [
    { value: timeLeft.days, label: "ថ្ងៃ" },
    { value: timeLeft.hours, label: "ម៉ោង" },
    { value: timeLeft.minutes, label: "នាទី" },
    { value: timeLeft.seconds, label: "វិនាទី" }
  ];

  return (
    <div
      className="hero min-h-screen overflow-hidden"
      style={{
        backgroundImage:
          "url(https://z-p3-scontent.fpnh5-2.fna.fbcdn.net/v/t39.30808-6/476226445_647715824286098_4533025413894353029_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeFPOGkYBu1p-qYnipQSR-2SLJX1srK55FEslfWysrnkUaRVAD1iT_DzRbWLfO2R-ZV6B2huWxBtp6ourRH8wxAu&_nc_ohc=gM0Ju9Rmt48Q7kNvgGQkhLf&_nc_oc=AdnlT5ykNgJzjgCMHHytamJquuLuMpufAkAJqx9ZReGGbAcfRobNUJraDNDhi9YRW2M&_nc_zt=23&_nc_ht=z-p3-scontent.fpnh5-2.fna&_nc_gid=MJZen4jwfAdEnqM1XPgZig&oh=00_AYEnPaWYDo6F9_yx6FxihGD8iEUv5-J-mTFPkAY3MgGS_A&oe=67E8093D)",
      }}
    >
      <h3 className="absolute top-8 text-2xl text-white">
        សាលាគម្ពីរនឹងចាប់ផ្ដើមក្នុងរយៈពេល
      </h3>
      <div className="grid absolute top-20 text-white text-2xl grid-flow-col gap-5 text-center auto-cols-max">
        {timeUnits.map((unit, index) => (
          <div key={index} className="flex flex-col">
            <span className="countdown font-mono text-5xl">
              <span style={{ "--value": unit.value }} aria-live="polite">
                {unit.value}
              </span>
            </span>
            {unit.label}
          </div>
        ))}
      </div>

      <div className="hero-overlay"></div>

      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">ជម្រាបសួរ</h1>
          <p className="mb-5">
            អ្នកទាំងអស់គ្នាអាចហ្វឹកហាត់ឆ្លើយសំណួរចម្លើយខគម្ពីរ
            សម្រាប់ត្រៀមសាលាគម្ពីរនៅលើនេះបាន សូមចុចប៊ូតុងខាងក្រោមដើម្បីឆ្លើយសំណួរ!🤗✝️
          </p>

          <Link to={"/options"}>
            <button className="btn btn-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
                />
              </svg>
              ចាប់ផ្ដើម
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;