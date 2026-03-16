import styles from "./DiscountBadge.module.css";

type DiscountProp = {
  discount: number;
};

const DiscountBadge = ({ discount }: DiscountProp) => {
  return (
    <div className={styles.discountWrapper}>
      <span aria-label={`price is ${discount}`}></span>
      <span>{`-${discount}%`}</span>
    </div>
  );
};

export default DiscountBadge;
