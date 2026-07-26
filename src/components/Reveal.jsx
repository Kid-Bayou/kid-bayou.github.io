import PropTypes from "prop-types";
import { useReveal } from "../hooks/useReveal";

function Reveal({ as: Tag = "div", className = "", delay = 0, children, ...rest }) {
  const [ref, isVisible] = useReveal();

  return (
    <Tag
      ref={ref}
      className={`reveal ${isVisible ? "is-visible" : ""} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}

Reveal.propTypes = {
  as: PropTypes.elementType,
  className: PropTypes.string,
  delay: PropTypes.number,
  children: PropTypes.node,
};

export default Reveal;
