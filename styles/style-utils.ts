import { css } from 'styled-components'

export const layout = {
  /* 両端揃え */
  spaceBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  /* 横並び（基本形） */
  sideBySide: css`
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
    }
  `,
  /* 横並び（中央揃え） */
  sideBySideCenter: css`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
      text-align: left;
    }
  `,
}

export const postTag = css`
  display: flex;
  color: var(--white);
  position: absolute;
  top: 8px;
  right: 8px;
  line-height: 1;
  gap: 8px;

  & span {
    width: 16px;
    height: 16px;
    display: block;
    border-radius: 50%;
  }

  & .new {
    background-color: var(--accent);
  }

  & .updated {
    background-color: var(--accent-orange);
  }

  & .soon {
    background-color: var(--accent-blue);
  }
`
