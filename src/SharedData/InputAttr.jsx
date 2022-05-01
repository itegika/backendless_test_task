const inputAttr = {
    labels: {
      label: "",
      placeholder: "Type here X axis labels",
      name: "labels",
      type: "text",
      required: true,
    },
    values: {
      label: "",
      placeholder: "Type here Y axis values",
      name: "values",
      type: "text",
      required: true,
    },
    bar:{
      label: "Bar Chart",
      name: "chart",
      type: "radio",
    },
    line:{
      label: "Line Chart",
      name: "chart",
      type: "radio",
    },
    doughnut:{
      label: "Doughnut Chart",
      name: "chart",
      type: "radio",
    },
    pie:{
      label: "Pie Chart",
      name: "chart",
      type: "radio",
    },
  };
  
  export default inputAttr;