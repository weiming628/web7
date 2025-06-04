// 模擬公告資料，實際可改成從API取得
const newsData = [
    {
      id: 1,
      publishTime: "2025-05-01 10:00",
      category: "系統公告",
      title: "系統維護通知",
      functionArea: "會員系統",
      content:
        "親愛的用戶您好，本系統將於2025年5月10日凌晨2點至4點進行系統維護，期間服務將暫停，敬請見諒。"
    },
    {
      id: 2,
      publishTime: "2025-05-15 14:30",
      category: "活動消息",
      title: "研習課程開放報名",
      functionArea: "教育服務",
      content:
        "最新研習課程如下網址顯示"
    }
  ];

  
  const newsContentDiv = document.getElementById("news-content");
  const newsLink = document.getElementById("news-link");
  
  newsLink.addEventListener("click", () => {
    // 清空之前內容
    newsContentDiv.innerHTML = "";
  
    // 建立公告列表標題
    const heading = document.createElement("h2");
    heading.textContent = "最新消息公告列表";
    heading.classList.add("mb-4");
    newsContentDiv.appendChild(heading);
  
    // 建立表格顯示公告
    const table = document.createElement("table");
    table.className = "table table-striped floating-item";
  
    // 表頭
    const thead = document.createElement("thead");
    thead.innerHTML = `
      <tr>
        <th>發布時間</th>
        <th>類別</th>
        <th>標題</th>
        <th>功能區</th>
      </tr>`;
    table.appendChild(thead);
  
    // 表身
    const tbody = document.createElement("tbody");
  
    newsData.forEach((item) => {
      const tr = document.createElement("tr");
  
      const tdPublishTime = document.createElement("td");
      tdPublishTime.textContent = item.publishTime;
      tr.appendChild(tdPublishTime);
  
      const tdCategory = document.createElement("td");
      tdCategory.textContent = item.category;
      tr.appendChild(tdCategory);
  
      const tdTitle = document.createElement("td");
      // 標題可點擊開啟詳細視窗
      const a = document.createElement("a");
      a.href = "#";
      a.textContent = item.title;
      a.addEventListener("click", (e) => {
        e.preventDefault();
        openNewsModal(item);
      });
      tdTitle.appendChild(a);
      tr.appendChild(tdTitle);
  
      const tdFunctionArea = document.createElement("td");
      tdFunctionArea.textContent = item.functionArea;
      tr.appendChild(tdFunctionArea);
  
      tbody.appendChild(tr);
    });
  
    table.appendChild(tbody);
    newsContentDiv.appendChild(table);
  });
  
  function openNewsModal(item) {
    // 設定 Modal 內容
    document.getElementById("newsModalLabel").textContent = item.title;
    document.getElementById("modal-publish-time").textContent = item.publishTime;
    document.getElementById("modal-category").textContent = item.category;
    document.getElementById("modal-function-area").textContent = item.functionArea;
    document.getElementById("modal-content").textContent = item.content;
  
    // 顯示 Modal
    const newsModal = new bootstrap.Modal(document.getElementById("newsModal"));
    newsModal.show();
  }
  



const homeLink = document.getElementById("home-link");

homeLink.addEventListener("click", (e) => {
  e.preventDefault();
  // 清空公告內容區
  newsContentDiv.innerHTML = "";


  // 顯示首頁內容
  const welcome = document.createElement("div");
  welcome.innerHTML = `
    <h2>歡迎來到學習網首頁</h2>
    <p>這裡是首頁的內容，您可以在這裡介紹網站或其他資訊。</p>
  `;
  newsContentDiv.appendChild(welcome);

  // 取消「最新消息」的active，設「首頁」為active
  setActiveNav("home-link");
});

function setActiveNav(activeId) {
  // 移除所有 nav-link 的 active
  document.querySelectorAll(".nav-link").forEach(link => {
    link.classList.remove("active");
  });
  // 加上 active 到目前點的
  document.getElementById(activeId).classList.add("active");
}


const workshopLink = document.getElementById("workshop-link");

workshopLink.addEventListener("click", (e) => {
  e.preventDefault(); // 防止跳頁

  // 清空內容區
  newsContentDiv.innerHTML = "";


  // 插入研習資訊內容（這裡可換成你要的真實資料）


const workshopContent = document.createElement("div");
workshopContent.innerHTML = `
  <h2>研習資訊</h2>
  <div class="floating-item">
    <strong>AI 華語教學應用</strong><br>
    日期：2025/07/15<br>
    地點：高雄師範大學 xxxx 教室
  </div>
  <div class="floating-item">
    <strong>華語教學初階班</strong><br>
    日期：2025/08/05<br>
    地點：線上（Google Meet）
  </div>
`;
newsContentDiv.innerHTML = ""; // 清空舊內容
newsContentDiv.appendChild(workshopContent);

});



document.addEventListener("DOMContentLoaded", () => {
  const dataLink = document.getElementById("data-link");
  const contentArea = newsContentDiv;

  dataLink.addEventListener("click", (e) => {
    e.preventDefault();

    newsContentDiv.innerHTML="";
   

    // 插入兩個圖表容器：折線圖 + 圓餅圖
    newsContentDiv.innerHTML =`
      <h2>數據分析統計</h2>
      <div class="floating-item">
        <div id="line-chart"></div>
      </div>
      <div class="floating-item mt-4">
        <div id="pie-chart"></div>
      </div>
    `;

    // 折線圖
    c3.generate({
      bindto: "#line-chart",
      data: {
        columns: [
          ['數據A', 60, 20, 100, 250, 50, 200],
          ['數據B', 15, 40, 10, 55, 25, 20]
        ],
        type: 'line'
      }
    });

    // 圓餅圖
    c3.generate({
      bindto: "#pie-chart",
      data: {
        columns: [
          ["類別A", 40],
          ["類別B", 70],
          ["類別C", 10]
        ],
        type: "pie"
      }
    });
  });
});


const servicesLink = document.getElementById("services-link");

servicesLink.addEventListener("click", (e) => {
  e.preventDefault();

  newsContentDiv.innerHTML = "";


  const servicesContent = document.createElement("div");
  servicesContent.innerHTML = `
    <h2>相關服務</h2>

    <div class="floating-item mb-3">
      <strong>課程介紹</strong><br>
      本系統提供數位學習、AI應用、教學設計等課程，幫助教師提升專業能力。
    </div>

    <div class="floating-item mb-3">
      <strong>研習課程開課日期</strong><br>
      - 數位教學工作坊：2025/07/20<br>
      - 教師AI應用進階班：2025/08/12<br>
    </div>

    <div class="floating-item mb-3">
      <strong>服務窗口</strong><br>
      客服信箱：support@example.edu.tw<br>
      聯絡電話：(02) 1234-5678<br>
      上班時間：週一至週五 09:00–17:00
    </div>

    <div class="floating-item mb-3">
      <strong>全國學生測驗統計分析</strong><br>
      點選下方圖表查看各地區學生的測驗平均成績與趨勢分析。<br>
      <em>（此區依據未來測驗人數及成績加入圖表顯示）</em>
    </div>
  `;

  newsContentDiv.appendChild(servicesContent);

  // 更新 active 狀態
  setActiveNav("services-link");
});




 
  const infoLinktDiv = document.getElementById("news-content");
  const infoLink = document.getElementById("info-link");
  
  infoLink.addEventListener("click", () => {
    // 清空之前內容
    newsContentDiv.innerHTML = "";
  
    // 建立公告列表標題
    const heading = document.createElement("h2");
    heading.textContent = "最新資訊";
    heading.classList.add("mb-4");
    newsContentDiv.appendChild(heading);
  
    // 建立表格顯示公告
    const table = document.createElement("table");
    table.className = "table table-striped floating-item";
  
    // 表頭
    const thead = document.createElement("thead");
    thead.innerHTML = `
      <tr>
        <th>發布時間</th>
        <th>類別</th>
        <th>標題</th>
        <th>功能區</th>
      </tr>`;
    table.appendChild(thead);
  
    // 表身
    const tbody = document.createElement("tbody");
  
    newsData1.forEach((item) => {
      const tr = document.createElement("tr");
  
      const tdPublishTime = document.createElement("td");
      tdPublishTime.textContent = item.publishTime;
      tr.appendChild(tdPublishTime);
  
      const tdCategory = document.createElement("td");
      tdCategory.textContent = item.category;
      tr.appendChild(tdCategory);
  
      const tdTitle = document.createElement("td");
      // 標題可點擊開啟詳細視窗
      const a = document.createElement("a");
      a.href = "#";
      a.textContent = item.title;
      a.addEventListener("click", (e) => {
        e.preventDefault();
        openNewsModal(item);
      });
      tdTitle.appendChild(a);
      tr.appendChild(tdTitle);
  
      const tdFunctionArea = document.createElement("td");
      tdFunctionArea.textContent = item.functionArea;
      tr.appendChild(tdFunctionArea);
  
      tbody.appendChild(tr);
    });
  
    table.appendChild(tbody);
    newsContentDiv.appendChild(table);
  });
  
  function openNewsModal(item) {
    // 設定 Modal 內容
    document.getElementById("newsModalLabel").textContent = item.title;
    document.getElementById("modal-publish-time").textContent = item.publishTime;
    document.getElementById("modal-category").textContent = item.category;
    document.getElementById("modal-function-area").textContent = item.functionArea;
    document.getElementById("modal-content").innerHTML = item.content;
  
    // 顯示 Modal
    const newsModal = new bootstrap.Modal(document.getElementById("newsModal"));
    newsModal.show();
  
    // 初始化 mermaid 圖表，確保渲染成功
    setTimeout(() => {
      const mermaidEls = document.querySelectorAll(".mermaid");
      mermaidEls.forEach(el => {
        el.removeAttribute("data-processed");
        el.innerHTML = el.textContent;  // 鍵：讓 Mermaid 讀到原始語法
      });
      if (mermaidEls.length > 0) {
        mermaid.init(undefined, mermaidEls);
      }
    }, 300); // 設個延遲讓 Modal 完全載入
  }
  const newsData1 = [
    {
      id: 1,
      publishTime: "2025-06-01 10:00",
      category: "學習網",
      title: "介紹",
      functionArea: "學習網介紹",
      content:
        "本學習網主要業務，強化新住民子女的華語能力學習，目的在於提升新住民子女的生活適應及學習動機。"
    },
    {
      id: 2,
      publishTime: "2025-06-01 10:00",
      category: "學習網簡介",
      title: "簡介",
      functionArea: "學習網",
      content:
        "學習網於xxxx年成立，主要由xxx博士與xxx人士共同創立,主要提升新住民及新住民子女的第二或第三專長及語言培訓"
    },

    {
      id: 3,
      publishTime: "2025-06-01 10:00",
      category: "組織架構",
      title: "組織架構",
      functionArea: "架構圖",
      content: `
        本學習網的組織架構如下所示：
        <div class="mermaid">
          graph TD
            A[處長] --> B[所長]
            B --> C[主任]
            C --> D[組長]
            D --> E[職員]
        </div>
      `
    }
  ];
 



  










