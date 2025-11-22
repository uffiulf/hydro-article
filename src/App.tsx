import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Layout from './components/Layout';
import HookIntro from './sections/HookIntro';
import TimelineAttack from './sections/TimelineAttack';
import RansomwareExplainer from './sections/RansomwareExplainer';
import ImpactData from './sections/ImpactData';
import HumanStories from './sections/HumanStories';
import RecoveryFuture from './sections/RecoveryFuture';
import Sources from './components/Sources';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Refresh ScrollTrigger on mount/resize
    ScrollTrigger.refresh();
  }, []);

  return (
    <Layout>
      <HookIntro />
      <TimelineAttack />
      <RansomwareExplainer />
      <ImpactData />
      <HumanStories />
      <RecoveryFuture />
      <Sources />
    </Layout>
  );
}

export default App;
