import styled from 'styled-components';

export const FlexDiv = styled.div`
  display: flex;
  justify-content: ${(props) => {
    if (props.justifyContent) return props.justifyContent;
    if (props.justifyCenter) return 'center';
    if (props.justifyAround) return 'space-around';
    if (props.justifyBetween) return 'space-between';
    if (props.justifyEnd) return 'flex-end';
    if (props.justifyStart) return 'flex-start';
    return null;
  }};
  align-items: ${(props) => {
    if (props.alignItems) return props.alignItems;
    if (props.alignStretch) return 'stretch';
    if (props.alignStart) return 'flex-Start';
    if (props.alignEnd) return 'flex-end';
    if (props.alignCenter) return 'center';
    if (props.alignBaseline) return 'baseline';
    return null;
  }};
  align-content: ${(props) => {
    if (props.alignContent) return props.content;
    if (props.contentStart) return 'flex-start';
    if (props.contentEnd) return 'flex-end';
    if (props.contentCenter) return 'center';
    if (props.contentBetween) return 'space-between';
    if (props.contentAround) return 'contentAround';
    return null;
  }};
  flex-direction: ${(props) => {
    if (props.row) return 'row';
    if (props.columnReverse) return 'column-reverse';
    return 'column';
  }};
  flex-flow: ${(props) => {
    if (props.flowColumn) return 'column';
    if (props.flowRow) return 'row';
    if (props.flowWrap) return 'wrap';
    if (props.flowReverse) return 'row-reverse';
    return null;
  }};
`;

// flex-direction: ${(props) =>
//   props.direction === "row" ? props.direction : "column"};
// height: ${(props) => (props.height ? props.height : null)};

// .flex {
//   display: flex;
// }
// .flex-centered {
//   display: flex;
//   align-items: center;
//   justify-content: center;
// }
// .align-justify-c {
//   align-items: center;
//   justify-content: center;
// }
// .flex-column {
//   flex-direction: column;
// }

// .flex-auto {
//   flex: auto;
// }

// .vh100 {
//   height: 100vh;
// }
