import "../styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Content } from "antd/lib/layout/layout";
import * as css from "./styles";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Content className={css.containerStyle}>
        <Component {...pageProps} />
      </Content>
    </QueryClientProvider>
  );
}

export default MyApp;
