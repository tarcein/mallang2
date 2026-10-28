export default function Home() {
  const kakaoJsKey =
    process.env.NEXT_PUBLIC_KAKAO_JS_KEY?.trim() ||
    "e5c6d7608ead3d938011073234beccca";
  const gameSource = kakaoJsKey
    ? `/squishy.html?kakao_js_key=${encodeURIComponent(kakaoJsKey)}`
    : "/squishy.html";

  return (
    <main>
      <iframe src={gameSource} title="사이버 말랑이" allow="autoplay; web-share" />
    </main>
  );
}
