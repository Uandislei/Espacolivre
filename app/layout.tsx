import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
export const metadata: Metadata = { title: "Espaço Livre", description: "Marketplace local para encontrar e anunciar espaços." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="pt-BR"><body><header className="header"><Link className="brand" href="/">Espaço Livre</Link><nav><Link href="/explorar">Explorar</Link><Link href="/anunciar">Anunciar</Link><Link href="/entrar">Entrar</Link></nav></header>{children}</body></html>; }