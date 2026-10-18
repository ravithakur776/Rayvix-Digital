import React from "react";
import { PRICING_COMPARISON } from "@/lib/pricing-data";
import styles from "./PricingComparison.module.css";

export function PricingComparison() {
  const renderValue = (val: boolean | string) => {
    if (typeof val === "boolean") {
      return val ? (
        <span className={styles.checkIcon} aria-label="Included">✓</span>
      ) : (
        <span className={styles.dashIcon} aria-label="Not included">—</span>
      );
    }
    return <span>{val}</span>;
  };

  return (
    <div className={styles.tableWrapper} role="region" aria-label="Detailed Deliverables Comparison Matrix">
      <table className={styles.table}>
        <thead className={styles.tableHead}>
          <tr>
            <th scope="col" className={styles.thFeature}>
              Platform Capabilities
            </th>
            <th scope="col" className={styles.thTier}>
              <span className={styles.tierHeadTitle}>Foundational</span>
              <span className={styles.tierHeadPrice}>₹2,49,000</span>
            </th>
            <th
              scope="col"
              className={`${styles.thTier} ${styles.thTierPopular}`}
            >
              <span className={styles.popularBadgeSm}>Flagship</span>
              <span className={styles.tierHeadTitle}>Flagship Platform</span>
              <span className={styles.tierHeadPrice}>₹5,49,000</span>
            </th>
            <th scope="col" className={styles.thTier}>
              <span className={styles.tierHeadTitle}>Enterprise</span>
              <span className={styles.tierHeadPrice}>₹12,99,000</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {PRICING_COMPARISON.map((section, sIdx) => (
            <React.Fragment key={sIdx}>
              <tr className={styles.categoryRow}>
                <td colSpan={4} className={styles.categoryCell}>
                  {section.category}
                </td>
              </tr>
              {section.features.map((feat, fIdx) => (
                <tr key={fIdx} className={styles.featureRow}>
                  <td className={styles.featureCell}>
                    <span className={styles.featureName}>{feat.name}</span>
                    <span className={styles.featureDesc}>{feat.description}</span>
                  </td>
                  <td className={styles.valueCell}>
                    {renderValue(feat.tier1)}
                  </td>
                  <td
                    className={`${styles.valueCell} ${styles.valueCellPopular}`}
                  >
                    {renderValue(feat.tier2)}
                  </td>
                  <td className={styles.valueCell}>
                    {renderValue(feat.tier3)}
                  </td>
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}
