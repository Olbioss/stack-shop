import Section from "#/components/base/common/section";
import FeatureGridContainer from "#/components/containers/store/feature-grid-container";

export default function FeatureGrid() {
  return (
    <Section
      title="One Marketplace, Many Shops"
      description="Ten independent shops, one seamless experience — here's what makes Stack Shop work."
    >
      <FeatureGridContainer />
    </Section>
  );
}
