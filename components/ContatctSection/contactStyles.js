import styled from "styled-components";

export const Contact = styled.section`
  padding: 2rem 0;
`;

export const ContactColumns = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 4rem;
  p {
    margin-bottom: 1rem;
  }

  @media (min-width: 50em) {
    flex-direction: row;
    .column-form,
    .column-map {
      width: ${(props) => (props.withMap ? "50%" : "100%")};
    }
  }
`;

export const FormGorup = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.125rem;

  input,
  textarea {
    margin: 0.375rem 0;
    width: 100%;
    border: none;
    border: 2px solid #eee;
    box-shadow: rgba(100, 100, 111, 0.1) 0px 7px 29px 0px;
    font-family: inherit;
    font-size: inherit;
    border-radius: 0.2rem;
  }
  input:focus,
  textarea:focus {
    outline-color: var(--blue-color);
  }
`;
export const SubmitButton = styled.input`
  font-family: var(--ff-headline);
  padding: 8px 20px;
  border-radius: 2px;
  outline: none;
  border: none;
  cursor: pointer;
  background: transparent;
  border: 1px solid var(--color-dark);
  color: var(--color-dark);
  text-transform: uppercase;
  font-weight: bold;
  margin: 1rem 0;
  :hover {
    color: var(--blue-color);
    border: 1px solid var(--blue-color);
  }
`;
export const ErrorMessage = styled.div`
  color: var(--color-accent);
  font-weight: bold;
`;
export const SuccessMessage = styled.div`
  color: var(--accent-color);
  font-weight: bold;
`;
