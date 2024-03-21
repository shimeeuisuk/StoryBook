import React from "react";
import { useState } from "react";
import styled from "styled-components";

export const TagsInput = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  min-height: 48px;
  width: ${(props) => props.inputwidth || "480"}px;
  padding: 0 8px;
  border-radius: 0.3rem;
  border: 1px solid ${(props) => props.bordercolor || "rgb(214, 216, 218)"};
  > ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 8px 0 0 0;
    > .tag {
      border-radius: 0.3rem;
      width: auto;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${(props) => props.tagftcolor || "#39739d"};
      padding: 0 8px;
      font-size: 14px;
      list-style: none;
      background: ${(props) => props.tagbgcolor || "#e1ecf4"};
      > .tag-close-icon {
        color: ${(props) => props.tagiconcolor || "#39739d"};
        width: 16px;
        height: 16px;
        text-align: center;
        font-size: 14px;
        cursor: pointer;
      }
    }
  }
  > input {
    flex: 1;
    border: none;
    height: 46px;
    font-size: 14px;
    padding: 4px 0 0 0;
    :focus {
      outline: transparent;
    }
  }
`;

export const Tag = ({
  inputwidth,
  bordercolor,
  tagbgcolor,
  tagftcolor,
  tagiconcolor,
}) => {
  // const selectedTags = (tags) => console.log(tags);

  const [tags, setTags] = useState([]);
  const removeTags = (indexToRemove) => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  };

  const addTags = (event) => {
    const filtered = tags.filter((el) => el === event.target.value);
    if (event.target.value !== "" && filtered.length === 0) {
      setTags([...tags, event.target.value]);
      // selectedTags([...tags, event.target.value]);
      event.target.value = "";
    }
  };

  return (
    <>
      <TagsInput
        inputwidth={inputwidth}
        bordercolor={bordercolor}
        tagbgcolor={tagbgcolor}
        tagftcolor={tagftcolor}
        tagiconcolor={tagiconcolor}
      >
        <ul id="tags">
          {tags.map((tag, index) => (
            <li key={index} className="tag">
              <span className="tag-title">{tag}</span>
              <span
                className="tag-close-icon"
                onClick={() => removeTags(index)}
              >
                X
              </span>
            </li>
          ))}
        </ul>
        <input
          className="tag-input"
          type="text"
          onKeyUp={(event) => (event.key === "Enter" ? addTags(event) : null)}
        />
      </TagsInput>
    </>
  );
};
