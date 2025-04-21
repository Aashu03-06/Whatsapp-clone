const chats = [
  
    { name: "Sheryians | Mern14", message: "github par code dekhlo..", time: "7:40 PM", image:"https://media.licdn.com/dms/image/v2/C4D0BAQGyA2WMJxAUaQ/company-logo_200_200/company-logo_200_200/0/1672471185737/the_sheryians_coding_school_logo?e=2147483647&v=beta&t=oeInMeA1kwYRYfoO0nHO6AwVwFKx1FKuTbI16bmoG7s" },
    { name: "Shinchan", message: "Photo", time: "11:30 AM", image:"https://m.media-amazon.com/images/I/41AP1VGhL7L._AC_UF1000,1000_QL80_.jpg" },
    { name: " Doraemon", message: "Hello Friend.....", time: "7:09 PM" , image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6PEtdSMRbCHJOkYLAIlXnF6xH3CJxvF3wuQ&s"},
    { name: "Dora The Explorer", message: "Hi, I'm Dora! ", time: "5:51 PM" , image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShux9e1Dv6ZTJZq8-iJ2ahPsAFtF57fbyVvQ&s" },
    { name: "mickey mouse ", message: "Disney Company", time: "4:25 PM"  , image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx8Ls54mxi3j4tzJdVqdn1q8d4MwKj4n8KgQ&s"},
    { name: "Charlie Brown", message: " comic strip Peanuts..", time: "4:04 PM"  , image:"https://jameswilding.blog/wp-content/uploads/2021/07/good-grief-charlie-brown.png?w=234"},
    { name: " Bugs Bunny", message: "world's most famous rabbit,......", time: "3:14 PM"  , image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvvyMxH6ye764vXLXVB656zmwnlygOkRbAIA&s"},
    { name: "Hello Kitty", message: " white cat with a red bow", time: "12:40 PM"  , image:"https://media.newyorker.com/photos/59095c67ebe912338a37455d/master/pass/Stokes-Hello-Kitty2.jpg"},
  ];

  const chatList = document.getElementById("chatList");

  chats.forEach(function(chat) {
    const div = document.createElement("div"); //for each chat message
    div.className = "chat-item";
    div.innerHTML = `<img src=" ${chat.image}" alt="profile">
      <div class="chat-content">
        <div class="chat-title">${chat.name}</div>
        <div class="chat-snippet">${chat.message}</div>
      </div>
      <div class="chat-time">${chat.time}</div> `;
    chatList.appendChild(div);
  });