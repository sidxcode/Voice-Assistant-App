import { StatusBar } from 'expo-status-bar';
import AppNavigation from './src/navigation/index';
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  return (
    <AppNavigation/>
  )
}