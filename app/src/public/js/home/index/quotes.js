const quotes = [
  {
    quote: "지옥을 걷고 있다면 계속해서 걸어가라.",
    author: "윈스턴 처칠",
  },
  {
    quote: "완벽함이 아니라 탁월함을 위해서 애써라.",
    author: "H. 잭슨 브라운 주니어",
  },
  {
    quote: "관찰하는데 있어서는 준비된 자에게만 기회가 온다.",
    author: "루이 파스퇴르",
  },
  {
    quote: "인생에 필요한 것은 무지와 확신 뿐이다. 그러면 성공은 확실하다.",
    author: "마크 트웨인",
  },
  {
    quote: "멈추지 말고 한 가지 목표에 매진하라. 그것이 성공의 비결이다.",
    author: "안나 파블로바",
  },
  {
    quote:
      "인생에서 성공하는 이는 꾸준히 목표를 바라보며 한결같이 그를 좇는 사람이다. 그것이 헌신이다.",
    author: "세실 B. 드밀",
  },
  {
    quote:
      "나는 성공의 열쇠는 모른다. 그러나 실패의 열쇠는 모두의 비위를 맞추려 하는 것이다.",
    author: "빌 코스비",
  },
  {
    quote: "작은 기회로부터 종종 위대한 업적이 시작된다.",
    author: "데모스테네스",
  },
  {
    quote: "위대한 이들은 목적을 갖고, 그 외의 사람들은 소원을 갖는다.",
    author: "워싱턴 어빙",
  },
  {
    quote:
      "순간을 사랑하라. 그러면 그 순간의 에너지가 모든 경계를 넘어 퍼져나갈 것이다.",
    author: "코리타 켄트",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
