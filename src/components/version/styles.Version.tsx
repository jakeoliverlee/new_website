import styled from 'styled-components';

export const VersionContainer = styled.span`
    background-color: #e1e4e8; // This is a light gray color similar to GitHub's badge color
    color: #24292e; // This is a dark gray color for the text
    font-size: 12px;
    padding: 2px 6px;
    border-radius: 3px; // Giving it slightly rounded edges
    font-weight: 500;
    line-height: 1.5;
    display: inline-block; // Ensures it only takes up as much width as its content requires
    vertical-align: middle;
    white-space: nowrap; // Prevents text inside from wrapping to the next line
    user-select: none;
    border: 1px solid transparent;
    box-shadow: inset 0 -1px 0 rgba(27,31,35,0.12); // This adds a subtle shadow at the bottom
`;
