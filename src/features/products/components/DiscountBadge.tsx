import styles from "./DiscountBadge.module.css";

type DiscountProp = {
  discount: number;
};

const DiscountBadge = ({ discount }: DiscountProp) => {
  return (
    <div className={styles.discountWrapper} aria-label="Discount in percentage">
      {`-${discount}%`}
    </div>
  );
};

export default DiscountBadge;
