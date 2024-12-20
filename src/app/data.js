// Sidebar
import {
  FiHome,
  FiClock,
  FiStar,
  FiBriefcase,
  FiFileText,
  FiShoppingCart,
  FiTrendingUp,
  FiTool,
  FiBarChart2,
  FiPlus,
  FiRefreshCw,
  FiUsers,
  FiTrash,
  FiFilter,
  FiEdit3,
  FiSettings,
  FiEye
} from "react-icons/fi";

export const menuItems = [
  { label: "Home", icon: FiHome },
  { label: "Recent", icon: FiClock },
  { label: "Pinned", icon: FiStar },
  { label: "Agent Skill", icon: FiTool, onClick: "onAgentSkillClick" },
  { section: "My Work" },
  { label: "Sales Accelerator", icon: FiBarChart2 },
  { label: "Dashboards", icon: FiBriefcase },
  { label: "Activities", icon: FiFileText },
  { section: "Customers" },
  { label: "Accounts", icon: FiUsers },
  { label: "Contacts", icon: FiUsers },
  { section: "Sales" },
  { label: "Leads", icon: FiUsers },
  { label: "Opportunities", icon: FiBriefcase },
  { label: "Competitors", icon: FiUsers },
  { section: "Collateral" },
  { label: "Quotes", icon: FiFileText },
  { label: "Orders", icon: FiShoppingCart },
  { label: "Invoices", icon: FiFileText },
  { label: "Products", icon: FiFileText },
  { label: "Sales Literature", icon: FiFileText },
  { section: "Marketing" },
  { label: "Marketing Lists", icon: FiUsers },
  { label: "Quick Campaigns", icon: FiUsers },
  { section: "Performance" },
  { label: "Sales", icon: FiTrendingUp },
];



export const actionItems = [
  {
    label: "Show chart",
    icon: FiBarChart2,
    onClick: () => console.log("Show chart clicked"),
    color:'text-blue-600'
  },
  {
    label: "Focused view",
    icon: FiEye,
    onClick: () => console.log("Focused view clicked"),
    color:'text-blue-600'
  },
  {
    label: "New",
    icon: FiPlus,
    onClick: () => console.log("New clicked"),
    color:'text-blue-600'
  },
  {
    label: "Refresh",
    icon: FiRefreshCw,
    onClick: () => console.log("Refresh clicked"),
    color:'text-blue-600'
  },
  {
    label: "Collaborate",
    icon: FiUsers,
    onClick: () => console.log("Collaborate clicked"),
    color:'text-blue-600'
  },
  {
    label: "Delete",
    icon: FiTrash,
    onClick: () => console.log("Delete clicked"),
    color:'text-blue-600'
  },
  {
    label: "Smart data",
    icon: FiFilter,
    className: "border p-2",
    onClick: () => console.log("Smart data clicked"),
    color:'text-blue-600'
  },
  {
    label: "Edit filters",
    icon: FiEdit3,
    className: "border p-2",
    onClick: () => console.log("Edit filters clicked"),
    color:'text-blue-600'
  },
  {
    label: "Edit columns",
    icon: FiSettings,
    className: "border p-2",
    onClick: () => console.log("Edit columns clicked"),
    color:'text-blue-600'
  },
  {
    label: "",
    icon: FiEdit3,
    className: "text-white p-2 bg-blue-700 rounded-md",
    onClick: () => console.log("Primary action clicked"),
    color:'text-white'
  },
];

// leadsData.js
export const leadsData = [
  {
    name: "Winford Asher",
    topic: "Cafe A100 for commercial use",
    status: "New",
    createdOn: "4/02/2024 12:00 PM",
  },
  {
    name: "Josia Love",
    topic: "Upgrading service plan",
    status: "New",
    createdOn: "3/30/2024 7:45 AM",
  },
  {
    name: "Harrison Curtis",
    topic: "Issue with throughput on EspressoMaster",
    status: "New",
    createdOn: "3/28/2024 3:30 PM",
  },
  {
    name: "Jermaine Berrett",
    topic: "New roaster in distribution facility",
    status: "New",
    createdOn: "3/25/2024 11:05 AM",
  },
  {
    name: "Gerald Stephens",
    topic: "Concerns on current machines",
    status: "New",
    createdOn: "3/23/2024 4:50 PM",
  },
  {
    name: "Halle Griffiths",
    topic: "Expanding business",
    status: "New",
    createdOn: "3/21/2024 10:20 AM",
  },
  {
    name: "Rachel Michael",
    topic: "Addressing service concerns",
    status: "New",
    createdOn: "3/19/2024 1:15 PM",
  },
  {
    name: "Alex Baker",
    topic: "Premium coffee beans",
    status: "New",
    createdOn: "3/17/2024 8:00 AM",
  },
  {
    name: "Lilly Pyles",
    topic: "Cafe A100 bulk rate",
    status: "New",
    createdOn: "3/13/2024 2:45 PM",
  },
  {
    name: "Jane Reyes",
    topic: "Improving cost per cup",
    status: "New",
    createdOn: "3/10/2024 9:30 AM",
  },
];

export const cards = [
  {
    id: 1,
    img: 'https://i.ibb.co/cCKYRyK/pic-1.png',
    title: "Jane Reyes",
    description:
      "Jane may be interested in upgrading espresso machines for her in-store coffee shops.",
    additionalInfo: "Expand business • High buying intent",
    todos: "Engage with Jane Reyes",
    about:
      "Jane Reyes, the Chief Operating Officer of Northwind Traders, is a dynamic leader with a proven track record in optimizing operations and enhancing customer experiences. Under her guidance, Northwind Traders in-store coffee shops have flourished, becoming a hallmark of quality and innovation. Jane's commitment to excellence makes her an ideal partner for First Coffee. She is always seeking top-tier equipment to elevate her coffee shop offerings, ensuring consistent, high-quality service.",
    whyPicked: [
      "Jane is a key decision maker and was browsing espresso machines on First Coffee website.",
      "Multiple people at her company reported slowness during service requests.",
      "Northwind Traders currently see $200M in revenue from their in-store coffee shops.",
    ],
    jd:'COO, Northwind Traders'
  },
  {
    id: 2,
    img: 'https://i.ibb.co/GsgsJgW/pic-2.png',
    title: "Allan Munger",
    description:
      "Prepare for high-buying intent meeting scheduled for 2 PM regarding upgrading service contract.",
    additionalInfo: "Upcoming meeting • Due today",
    todos: "Prepare a meeting with Allan",
    about:
      "Allan Munger, Head of Operations at Contoso Ltd., is a results-oriented leader with a keen focus on streamlining service operations. Under Allan's leadership, Contoso has enhanced its customer satisfaction ratings significantly by integrating modernized workflows and optimized service contracts. Allan's strategic vision ensures that the company remains a leader in its sector, consistently delivering value to its clients. His interest in upgrading Contoso's service contract highlights his commitment to operational excellence.",
    whyPicked: [
      "Allan has a high-priority meeting scheduled today regarding a service contract upgrade.",
      "Contoso Ltd. reported increased customer service demands and requires optimized workflows.",
      "Allan has shown interest in advanced solutions that align with Contoso's goals for long-term operational improvements.",
    ],
    jd:'Head of Real Estate Development . Contoso Coffee'
  },
];
