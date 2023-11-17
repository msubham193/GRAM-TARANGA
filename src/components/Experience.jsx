import { Model } from "./Scene";

const Experience = () => {
  return (
    <>
      <ambientLight />
      <directionalLight position={[-5, 5, 5]} castShadow />
      <group position={[2, -1, -10]}>
        <Model position={[1.6, 0, -1]} />
      </group>
    </>
  );
};

export default Experience;
