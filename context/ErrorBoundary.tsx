"use client";

import React, { ReactNode, ErrorInfo } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Erro capturado pelo Error Boundary:", error, errorInfo);
    
    // Enviar para serviço de monitoramento (Sentry, etc)
    if (typeof window !== "undefined" && window.location.hostname !== "localhost") {
      // Aqui você pode integrar com Sentry ou outro serviço
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="min-h-screen bg-white flex items-center justify-center p-6">
            <div className="max-w-md bg-white border-4 border-black p-8 text-center" style={{ boxShadow: "6px 6px 0px #CC0000" }}>
              <h2 className="text-4xl font-black text-black mb-4 uppercase" style={{ fontFamily: "'Bebas Neue', cursive" }}>
                Oops!
              </h2>
              <p className="text-black text-lg font-semibold mb-6">
                Algo deu errado. Por favor, tente recarregar a página.
              </p>
              <button
                onClick={() => window.location.reload()}
                className="bg-[#CC0000] text-white font-black py-3 px-6 uppercase tracking-widest border-2 border-black hover:bg-red-700 transition-colors w-full"
                style={{ boxShadow: "3px 3px 0px black" }}
              >
                Recarregar Página
              </button>
              <p className="text-black/50 text-xs mt-4 font-semibold">
                Código do erro: {this.state.error?.message}
              </p>
            </div>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
