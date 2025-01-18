import Footer from "./Footer.jsx";
import React, { useState } from "react";
import searchIcon from "./assets/search-icon.png";
import "./styles/Videos.css";

function Videos() {
  const [search, setSearch] = useState("");
  const [ytFrame, setYtFrame] = useState("");
  const filter = ["HCI", "OOSE", "ISE", "PROJECT", "UML", "SPM"];
  const [filterValue, setFilterValue] = useState("Filter");

  const videosInfo = [
    {
      title: "Test Case",
      imgUrl:
        "https://i.ytimg.com/vi/lHGI6kb4R7g/hqdefault.jpg?sqp=-oaymwFBCNACELwBSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AHOBYACjAmKAgwIABABGGUgZShlMA8=&rs=AOn4CLDSKYXWgfMuL-f9eHlMf14GzPJSqQ",
      vidUrl: "https://www.youtube.com/watch?v=lHGI6kb4R7g",
      tags: ["Oose", "OOSE", "oose", "Project", "project", "PROJECT"],
      frame: `<iframe width="1250" height="703" src="https://www.youtube.com/embed/lHGI6kb4R7g" title="Test Cases" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },
    {
      title: "Fully Dressed Use Cases",
      imgUrl:
        "https://i.ytimg.com/vi/k6NV8Wa39j4/hqdefault.jpg?sqp=-oaymwFBCNACELwBSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AHOBYACjAmKAgwIABABGGUgZShlMA8=&rs=AOn4CLB7bDyesAjMK2Omn0_CO3dYLowPFA",
      vidUrl: "https://www.youtube.com/watch?v=k6NV8Wa39j4",
      tags: ["Oose", "OOSE", "oose", "UML", "uml", "Uml"],
      frame: `<iframe width="1250" height="703" src="https://www.youtube.com/embed/k6NV8Wa39j4" title="Fully Dressed Use Cases" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },
    {
      title: "Use Case Diagrams & Fully Dress Use Cases",
      imgUrl:
        "https://i.ytimg.com/vi/7qaLB52Ct_8/hqdefault.jpg?sqp=-oaymwFBCNACELwBSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AHOBYACjAmKAgwIABABGGUgZShlMA8=&rs=AOn4CLBkkXYg1O3C7NuHIKKpMXazVhi90A",
      vidUrl: "https://www.youtube.com/watch?v=7qaLB52Ct_8",
      tags: ["Oose", "OOSE", "oose", "UML", "uml", "Uml"],
      frame: `<iframe width="1250" height="703" src="https://www.youtube.com/embed/7qaLB52Ct_8" title="Lecture 16 17 Use Case Diagram &amp; Fully Dresseed Use Cases" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },
    {
      title: "Class Diagram",
      imgUrl:
        "https://i.ytimg.com/vi/szafnxaYU3A/hqdefault.jpg?sqp=-oaymwFBCNACELwBSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AHOBYACgAqKAgwIABABGF0gXShdMA8=&rs=AOn4CLDSzGJwI_yh1nJuTZ9RcbpGZJflcw",
      vidUrl: "https://www.youtube.com/watch?v=szafnxaYU3A",
      tags: ["Ise", "ISE", "ise", "Oose", "OOSE", "oose", "UML", "uml", "Uml"],

      frame: `<iframe width="1250" height="703" src="https://www.youtube.com/embed/szafnxaYU3A" title="Class Diagrams" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },
    {
      title: "SSD part 2",
      imgUrl:
        "https://i.ytimg.com/vi/OeVEHxwRpFI/hqdefault.jpg?sqp=-oaymwFBCNACELwBSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AHOBYACgAqKAgwIABABGGUgZShlMA8=&rs=AOn4CLA3KzRgUjPq96p6VOqF8jca-C4fIQ",
      vidUrl: "https://www.youtube.com/watch?v=OeVEHxwRpFI",
      tags: ["Ise", "ISE", "ise", "Oose", "OOSE", "oose", "UML", "uml", "Uml"],
      frame: `<iframe width="1250" height="703" src="https://www.youtube.com/embed/OeVEHxwRpFI" title="SSD part2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },
    {
      title: "Domain Model",
      imgUrl:
        "https://i.ytimg.com/vi/_amJKr45_wk/hqdefault.jpg?sqp=-oaymwFBCNACELwBSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AHOBYACgAqKAgwIABABGGUgZShlMA8=&rs=AOn4CLAWXSTacDEDghot35VhNP1mX_ASRg",
      vidUrl: "https://www.youtube.com/watch?v=_amJKr45_wk",
      tags: ["Ise", "ISE", "ise", "Oose", "OOSE", "oose", "UML", "uml", "Uml"],
      frame: `<iframe width="1250" height="703" src="https://www.youtube.com/embed/_amJKr45_wk" title="Domain Model" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },

    {
      title: "Project Ideas & Use Case Diagram",
      imgUrl:
        "https://i.ytimg.com/vi/imlc940BtI8/hqdefault.jpg?sqp=-oaymwFBCNACELwBSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AHOBYACjAmKAgwIABABGGUgZShlMA8=&rs=AOn4CLAdH-Ni_qeX_yzB8_vKbkHBOB3H1Q",
      tags: [
        "Oose",
        "OOSE",
        "oose",
        "Project",
        "project",
        "PROJECT",
        "UML",
        "uml",
        "Uml",
      ],
      frame: `<iframe width="1250" height="703" src="https://www.youtube.com/embed/imlc940BtI8" title="Lecture 15 OOSE Project ideas continue &amp; Use Case Diagram" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },

    {
      title: "Part 2 OOSE Project Ideas Continue",
      imgUrl:
        "https://i.ytimg.com/vi/yyxYHuBTMvA/hqdefault.jpg?sqp=-oaymwFBCNACELwBSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AHOBYACjAmKAgwIABABGGUgZShlMA8=&rs=AOn4CLCWVmsIEJnCQXvhsHhlvPce_1xf1A",
      tags: ["Oose", "OOSE", "oose", "Project", "project", "PROJECT"],
      frame: `<iframe width="1250" height="703" src="https://www.youtube.com/embed/yyxYHuBTMvA" title="Lecture 14 part 2 OOSE Project Ideas continue" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },

    {
      title: "Part 1 OOSE Project Ideas & Details",
      imgUrl:
        "https://i.ytimg.com/vi/D0ThSDgWQNQ/hqdefault.jpg?sqp=-oaymwFBCNACELwBSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AHOBYACgAqKAgwIABABGGUgZShlMA8=&rs=AOn4CLCql247nz7UGyAqbsMgAzsf5NEeRg",
      tags: ["Oose", "OOSE", "oose", "Project", "project", "PROJECT"],
      frame: `<iframe width="1250" height="703" src="https://www.youtube.com/embed/D0ThSDgWQNQ" title="Lecture 14 part 1 OOSE Project Ideas &amp; Details" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },

    {
      title: "Part 1 OOSE SRS",
      imgUrl:
        "https://i.ytimg.com/vi/gGxzi_YmoN0/hqdefault.jpg?sqp=-oaymwFBCNACELwBSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AHOBYACjAmKAgwIABABGGUgZShlMA8=&rs=AOn4CLBEJSh3KrStCmpMzxk_paxIZ4zSaA",
      tags: ["Oose", "OOSE", "oose", "Project", "project", "PROJECT"],
      frame: `<iframe width="1250" height="703" src="https://www.youtube.com/embed/gGxzi_YmoN0" title="Lecture 13  part 1 OOSE SRS" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },

    {
      title: "OOSE Project Vision",
      imgUrl:
        "https://i.ytimg.com/vi/MDoMJ4ITyts/hqdefault.jpg?sqp=-oaymwFBCNACELwBSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AG-BIACgAqKAgwIABABGGUgZShlMA8=&rs=AOn4CLAYTQbo3zqDMWaPvZFdOWthBreKig",
      tags: ["Oose", "OOSE", "oose", "Project", "project", "PROJECT"],
      frame: `<iframe width="1250" height="703" src="https://www.youtube.com/embed/MDoMJ4ITyts" title="Lecture 12 OOSE Project Vision" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },

    {
      title: "HCI || Planning The Website || Model Website",
      imgUrl:
        "https://i.ytimg.com/vi/-B3rdw8YtF4/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBb_rf-lBBcCQjPO3PI5Ppr1gz_zw",
      tags: ["Hci", "HCI", "hci"],
      frame: `<iframe width="1250" height="703" src="https://www.youtube.com/embed/-B3rdw8YtF4" title="Khawaja Tahir || HCI || Lecture 28 || Planning The Website || Model Website" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },

    {
      title:
        "HCI ||Good Deeds & Mistakes in Web Design||Usability Principle Part 2",
      imgUrl:
        "https://i.ytimg.com/vi/r3j9uu6h7G8/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAG01i1m-nVE8nk4co8M2fw-Q8XzA",
      vidUrl: "",
      tags: ["Hci", "HCI", "hci"],
      frame: `<iframe width="1250" height="703" src="https://www.youtube.com/embed/r3j9uu6h7G8" title="Khawaja Tahir || HCI || Lecture 27||WEB||Good Deeds &amp; Mistakes in Web Design||Usability Principle" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },

    {
      title:
        "HCI||Good Deeds & Mistakes in Web Design||Usability Principle Part 1",
      imgUrl:
        "https://i.ytimg.com/vi/r3j9uu6h7G8/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAG01i1m-nVE8nk4co8M2fw-Q8XzA",
      vidUrl: "",
      tags: ["Hci", "HCI", "hci"],
      frame: `<iframe width="1250" height="703" src="https://www.youtube.com/embed/rlxn9xBDfFk" title="Khawaja Tahir||HCI||Lecture 26||WEB||Good Deeds &amp; Mistakes in Web Design||Usability Principle" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },

    {
      title:
        "HCI||Evaluation||Heuristic Evaluation||Heuristic Evaluation Process",
      imgUrl:
        "https://i.ytimg.com/vi/r3j9uu6h7G8/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAG01i1m-nVE8nk4co8M2fw-Q8XzA",
      vidUrl: "",
      tags: ["Hci", "HCI", "hci"],
      frame: `<iframe width="1250" height="703" src="https://www.youtube.com/embed/lfXdTB5epj0" title="Khawaja Tahir || HCI ||Lecture 25||Evaluation||Heuristic Evaluation||Heuristic Evaluation Process" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },

    {
      title:
        "HCI || Good User Interface || User Interface || Guideline of Good UI Part 2",
      imgUrl:
        "https://i.ytimg.com/vi/r3j9uu6h7G8/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAG01i1m-nVE8nk4co8M2fw-Q8XzA",
      vidUrl: "",
      tags: ["Hci", "HCI", "hci"],
      frame: `<iframe width="1250" height="703" src="https://www.youtube.com/embed/_ALni56svDA" title="Khawaja Tahir || HCI ||Lecture 21 ||Good User Interface || User Interface || Guideline of Good UI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },

    {
      title: "HCI || Color || Color content || Evaluation Design",
      imgUrl:
        "https://i.ytimg.com/vi/r3j9uu6h7G8/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAG01i1m-nVE8nk4co8M2fw-Q8XzA",
      vidUrl: "",
      tags: ["Hci", "HCI", "hci"],
      frame: `<iframe width="1250" height="703" src="https://www.youtube.com/embed/ZwWqTJMCCcA" title="Khawaja Tahir || HCI || Lecture 24 || Color || Color content || Evaluation Design" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },

    {
      title:
        "HCI || Good User Interface || User Interface || Guideline of Good UI part 1",
      imgUrl:
        "https://i.ytimg.com/vi/r3j9uu6h7G8/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAG01i1m-nVE8nk4co8M2fw-Q8XzA",
      vidUrl: "",
      tags: ["Hci", "HCI", "hci"],
      frame: `<iframe width="1250" height="703" src="https://www.youtube.com/embed/_ALni56svDA" title="Khawaja Tahir || HCI ||Lecture 21 ||Good User Interface || User Interface || Guideline of Good UI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },

    {
      title: "HCI || Information Presentation Principles",
      imgUrl:
        "https://i.ytimg.com/vi/r3j9uu6h7G8/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAG01i1m-nVE8nk4co8M2fw-Q8XzA",
      vidUrl: "",
      tags: ["Hci", "HCI", "hci"],
      frame: `<iframe width="1250" height="703" src="https://www.youtube.com/embed/XrGRrhL1EFU" title="Khawaja Tahir || HCI || Lecture 23 || Information Presentation Principles" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },

    {
      title: "FYP-1 || Risk Management Template & Discussion",
      imgUrl:
        "https://i.ytimg.com/vi/2uoxetsxQ2Y/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCyHCKrvDj0anWSeg1ds_32MMadHQ",
      vidUrl: "",
      tags: ["Project", "project", "PROJECT"],
      frame: `<iframe width="1250" height="703" src="https://www.youtube.com/embed/2uoxetsxQ2Y" title="Khawaja Tahir || FYP-1 || Week 11 || Risk Management Template &amp; Discussion" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },

    {
      title:
        " HCI || Conducting The Test||TCUID Process|| User Centered Design UCD",
      imgUrl:
        "https://i.ytimg.com/vi/dXAAEjReQ-s/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCu2kEiMQ17nO7WULZg1McCFO9x0g",
      vidUrl: "",
      tags: ["Hci", "HCI", "hci"],
      frame: `<iframe width="1250" height="703" src="https://www.youtube.com/embed/dXAAEjReQ-s" title="Khawaja Tahir || HCI ||Lecture 20||Conducting  The Test||TCUID Process|| User Centered Design  UCD" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },
    {
      title: "SPM || Project Risk Management 3",
      imgUrl:
        "https://i.ytimg.com/vi/fzqdG2KV2NU/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLARmE96NI0jBb8GQ6k1Mycn0s4AUw",
      tags: ["SPM", "spm", "Spm"],
      frame: `<iframe width="1250" height="703" src="https://www.youtube.com/embed/fzqdG2KV2NU" title="Khawaja Tahir || SPM || Week 17 || Project Risk Management" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },
    {
      title: " SPM || Project Risk Management 2",
      imgUrl:
        "https://i.ytimg.com/vi/fzqdG2KV2NU/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLARmE96NI0jBb8GQ6k1Mycn0s4AUw",
      tags: ["SPM", "spm", "Spm"],
      frame: `<iframe width="1250" height="703" src="https://www.youtube.com/embed/ad_NF3XLAE8" title="Khawaja Tahir || SPM || Week 16 || Project Risk Management" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },
    {
      title: "SPM || Project Risk Management 1",
      imgUrl:
        "https://i.ytimg.com/vi/fzqdG2KV2NU/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLARmE96NI0jBb8GQ6k1Mycn0s4AUw",
      tags: ["SPM", "spm", "Spm"],
      frame: `<iframe width="1250" height="703" src="https://www.youtube.com/embed/KbhJVFhwVLg" title="Khawaja Tahir || SPM || Week 15 || Project Risk Management" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },
    {
      title: "SPM || Project Communication Management",
      imgUrl:
        "https://i.ytimg.com/vi/fzqdG2KV2NU/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLARmE96NI0jBb8GQ6k1Mycn0s4AUw",
      tags: ["SPM", "spm", "Spm"],
      frame: `<iframe width="1250" height="703" src="https://www.youtube.com/embed/VMyrS1vc1Ew" title="Khawaja Tahir || SPM || Week 14 || Project Communication Management" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },
    {
      title: "SPM || Project Quality Management",
      imgUrl:
        "https://i.ytimg.com/vi/fzqdG2KV2NU/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLARmE96NI0jBb8GQ6k1Mycn0s4AUw",
      tags: ["SPM", "spm", "Spm"],
      frame: `<iframe width="1250" height="703" src="https://www.youtube.com/embed/CMj3yg25c5I" title="Khawaja Tahir || SPM || Week 13 || Project Quality Management" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },
    {
      title: "SPM || Project Cost & Quality Management",
      imgUrl:
        "https://i.ytimg.com/vi/fzqdG2KV2NU/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLARmE96NI0jBb8GQ6k1Mycn0s4AUw",
      tags: ["SPM", "spm", "Spm"],
      frame: `<iframe width="1250" height="703" src="https://www.youtube.com/embed/NKR4SikZA7s" title="Khawaja Tahir || SPM || Week 12 || Project Cost &amp; Quality Management" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },
    {
      title: "SPM || Continued || Project Cost Management",
      imgUrl:
        "https://i.ytimg.com/vi/fzqdG2KV2NU/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLARmE96NI0jBb8GQ6k1Mycn0s4AUw",
      tags: ["SPM", "spm", "Spm"],
      frame: `<iframe width="1250" height="703" src="https://www.youtube.com/embed/W7t7cwDUqFo" title="Khawaja Tahir || SPM || Week 11 Continued || Project Cost Management" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },
    {
      title: "SPM || Project Time & Cost Management",
      imgUrl:
        "https://i.ytimg.com/vi/fzqdG2KV2NU/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLARmE96NI0jBb8GQ6k1Mycn0s4AUw",
      tags: ["SPM", "spm", "Spm"],
      frame: `<iframe width="1250" height="703" src="https://www.youtube.com/embed/0HuHRyfTmcQ" title="Khawaja Tahir || SPM || Week 11 || Project Time &amp; Cost Management" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },
    {
      title: "SPM || Continued || Project Time Management",
      imgUrl:
        "https://i.ytimg.com/vi/fzqdG2KV2NU/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLARmE96NI0jBb8GQ6k1Mycn0s4AUw",
      tags: ["SPM", "spm", "Spm"],
      frame: `<iframe width="1250" height="703" src="https://www.youtube.com/embed/w3hYzOOj3P8" title="Khawaja Tahir || SPM || Week 10 Continued || Project Time Management" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },
    // {
    //   title: "",
    //   imgUrl: "",
    //   vidUrl: "",
    //   tags: [
    //     "Hci",
    //     "HCI",
    //     "hci",
    //     "Ise",
    //     "ISE",
    //     "ise",
    //     "Oose",
    //     "OOSE",
    //     "oose",
    //     "Project",
    //     "project",
    //     "PROJECT",
    //     "UML",
    //     "uml",
    //     "Uml",
    //   ],
    //   frame: ``,
    // },
  ];

  function searchHandle(e) {
    setSearch(e.target.value);
    setFilterValue(`Filter`);
  }
  function searchHandleEmpty(e) {
    if (e.target.value.trim() === "") {
      setSearch(e.target.value);
    }
  }

  function crossWindow() {
    document.querySelector(".video-preview").style.display = "none";
    setYtFrame("");
  }

  function frameFetch(frame) {
    setYtFrame(frame);
    document.querySelector(".video-preview").style.display = "flex";
    document.querySelector(".video-preview").focus();
    // window.scrollTo({
    //   top: 0,
    //   behavior: "smooth",
    // });
  }

  return (
    <>
      <div className="search-outer">
        <div className="search-bar">
          <div className="search-bar-div">
            <input
              type="text"
              id="search"
              placeholder="Search"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  searchHandle(e);
                }
              }}
              onChange={searchHandleEmpty}
            />
            <div
              className="search-btn"
              onClick={() => {
                const inputValue = document.getElementById("search").value;
                setSearch(inputValue);
                setFilterValue(`Filter`);
              }}
            >
              <img src={searchIcon} alt="srch.png" />
              <div className="search-tooltip">Search</div>
            </div>
          </div>
          <div className="dropdown-container">
            <div className="dropdown">
              <button className="dropbtn">{filterValue}</button>
              <div className="dropdown-content">
                {filter.map((category, index) => {
                  return (
                    <div
                      key={index}
                      className="dropdown-item"
                      onClick={() => {
                        document.getElementById("search").value = "";
                        setSearch(category);
                        setFilterValue(`Filter: ${category}`);
                      }}
                    >
                      {category}
                    </div>
                  );
                })}
              </div>
            </div>
            <button
              className="dropbtn"
              onClick={() => {
                setSearch("");
                setFilterValue("Filter");
              }}
            >
              Clear Filter
            </button>
          </div>
        </div>
      </div>
      <section className="videos-section">
        <div className="whole-body">
          {videosInfo.filter((video) => {
            return (
              video.title.includes(search) ||
              video.title.toLowerCase().includes(search) ||
              video.title.toUpperCase().includes(search) ||
              video.tags.includes(search)
            );
          }).length > 0 ? (
            videosInfo
              .filter((video) => {
                return (
                  video.title.includes(search) ||
                  video.title.toLowerCase().includes(search) ||
                  video.title.toUpperCase().includes(search) ||
                  video.tags.includes(search)
                );
              })
              .map((video, index) => {
                return (
                  <div className="preview" key={index}>
                    <div
                      className="thumbnail-row"
                      onClick={() => frameFetch(video.frame)}
                    >
                      <img
                        className="thumbnail"
                        src={video.imgUrl}
                        alt={`${video.title} image`}
                      />
                    </div>
                    <div className="video_channel">
                      <div className="video_info">
                        <p className="video_title">{video.title}</p>
                      </div>
                    </div>
                  </div>
                );
              })
          ) : (
            <div className="no-results">
              <p>No results found for "{search}".</p>
            </div>
          )}
        </div>
      </section>

      <div
        className="video-preview"
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            crossWindow();
          }
        }}
        tabIndex={-1}
      >
        <div className="video-preview-inner">
          <div dangerouslySetInnerHTML={{ __html: ytFrame }}></div>
          <div className="cross-preview" onClick={crossWindow}>
            X
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Videos;
