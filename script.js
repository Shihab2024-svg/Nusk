let user = {
  id: 1,
  username: "testuser",
  links: [
    { id: 4, title: "رقم واتساب", url: "https://wa.me/+967772587000", icon: "fab fa-whatsapp" }
  ]
};

// دالة عرض الروابط
function displayLinks() {
  const linksContainer = document.getElementById("links");
  linksContainer.innerHTML = ""; // تنظيف القائمة
  user.links.forEach(link => {
    const linkElement = document.createElement("a");
    linkElement.href = link.url;
    linkElement.target = "_blank"; // فتح الرابط في نافذة جديدة
    linkElement.classList.add("link-item");

    // إضافة الأيقونة والنص
    linkElement.innerHTML = `<i class="${link.icon} sp"></i> ${link.title}`;
    linksContainer.appendChild(linkElement);
  });
}

// دالة إضافة رابط جديد
document.getElementById("addLink").addEventListener("click", () => {
  const title = prompt("Enter link title:"); // طلب العنوان
  const url = prompt("Enter link URL:"); // طلب الرابط
  const icon = prompt("Enter icon class (e.g., 'fab fa-facebook'):"); // طلب الأيقونة

  if (title && url && icon) {
    const newLink = { id: Date.now(), title, url, icon };
    user.links.push(newLink); // إضافة الرابط
    displayLinks(); // تحديث العرض
  } else {
    alert("Please fill in all the fields!");
  }
});



document.addEventListener("DOMContentLoaded", function () {
    const greetingElement = document.getElementById("greeting");
    const textLines = ["مرحبا بك، يمكنكم التواصل معنا عبر الواتساب"]; // النص مع السطر الجديد
    let index = 0;
    let lineIndex = 0;
    let currentText = "";

    // تحديث عرض الـ border بعد إضافة كل سطر
    function updateBorder() {
        const lastLine = greetingElement.lastElementChild;
        const lastLineWidth = lastLine ? lastLine.offsetWidth : 0;
        greetingElement.style.borderRight = `${lastLineWidth}px solid white`;
    }

    function typeEffect() {
        if (lineIndex < textLines.length) {
            if (index < textLines[lineIndex].length) {
                currentText += textLines[lineIndex][index];
                greetingElement.innerHTML = currentText + (lineIndex === 0 ? "<br>" : "");
                index++;
                setTimeout(typeEffect, 150);
            } else {
                index = 0;
                lineIndex++;
                currentText += "<br>"; // إضافة سطر جديد
                updateBorder(); // تحديث عرض الـ border بعد السطر الأخير
                setTimeout(typeEffect, 500); // انتظار بسيط قبل بدء السطر التالي
            }
        }
    }

    setTimeout(typeEffect, 1000); // تأخير 2 ثانية قبل بدء الأنميشن
});



// الوظيفة لفتح وإغلاق القائمة الجانبية
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar"); // الحصول على عنصر القائمة الجانبية
    sidebar.classList.toggle("open"); // إضافة أو إزالة الكلاس "open" لإظهار/إخفاء القائمة
}


document.addEventListener("wheel", function(e) {
    if (e.ctrlKey) {
        e.preventDefault(); // منع الزووم باستخدام عجلة الفأرة
    }
}, { passive: false });

document.addEventListener('gesturestart', function(e) {
    e.preventDefault(); // منع الزووم باستخدام الإيماءات في الأجهزة اللمسية
});


document.addEventListener("touchstart", function(e) {
    if (e.touches.length > 1) { // إذا كان هناك أكثر من إصبع
        e.preventDefault(); // منع الزووم باستخدام الإيماءات اللمسية
    }
}, { passive: false });

document.addEventListener("gesturestart", function(e) {
    e.preventDefault(); // منع الزووم عند التمرير بالإيماءات
});


// عرض الروابط عند تحميل الصفحة
window.onload = displayLinks;
