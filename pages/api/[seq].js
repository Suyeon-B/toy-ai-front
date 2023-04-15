// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

let timeline = 0;

export default function handler(req, res) {
  const { seq } = req.query;
  let data = {};

  data = {
    timeline: timeline,
    content: `${timeline} 이야기를 진행하고 있습니다.이야기를 진행하고 있습니다.이야기를 진행하고 있습니다.이야기를 진행하고 있습니다.이야기를 진행하고 있습니다.이야기를 진행하고 있습니다.이야기를 진행하고 있습니다.이야기를 진행하고 있습니다.`,
    picture_uri:
      "https://oaidalleapiprodscus.blob.core.windows.net/private/org-miPEsIqedNBCQ9GnGLeXx8Qa/user-CwlwMMb4Wl6A9wZ9SwzuvPwc/img-WkXVLUhiJqfkBMZDwYSgaxfz.png?st=2023-04-15T04%3A13%3A55Z&se=2023-04-15T06%3A13%3A55Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-04-15T02%3A09%3A35Z&ske=2023-04-16T02%3A09%3A35Z&sks=b&skv=2021-08-06&sig=O9zl/U/M6gzV0fSb6CrO82mi8y7UwRbq2OWJPNX%2BxOQ%3D", //
    voice_uri: "https://~~~~", //
    next_content_list: [
      { seq: 1, content: timeline+"스토리 선택지 1" },
      { seq: 2, content: timeline+"스토리 선택지 1" },
      { seq: 3, content: timeline+"스토리 선택지 1" },
      { seq: 4, content: timeline+"스토리 선택지 1" },
    ],
  };

  timeline++;

  setTimeout(() => {
    res.status(200).json(data);
  }, 1000); 
}
