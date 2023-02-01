import React from "react";
import { Path } from "path-parser";
import { useRouter } from "next/router";
import { useAuth } from "util/auth.js";
import { useTheme } from "@mui/styles";

const types = [
  { name: "Announcement", page: "/announcement" },
  { name: "Navbar", page: "/navbar" },
  { name: "Hero", page: "/hero" },
  { name: "Call to Action", page: "/call-to-action" },
  { name: "FAQ", page: "/faq" },
  { name: "Newsletter", page: "/newsletter" },
  { name: "Features", page: "/features" },
  { name: "Clients", page: "/clients" },
  { name: "Content", page: "/content" },
  { name: "Media", page: "/media" },
  { name: "Testimonials", page: "/testimonials" },
  { name: "Social", page: "/social" },
  { name: "Team", page: "/team" },
  { name: "Stats", page: "/stats" },
  { name: "Pricing", page: "/pricing" },
  { name: "Contact", page: "/contact" },
  { name: "Footer", page: "/footer" },
  { name: "Authentication", page: "/auth/:type" },
  { name: "Settings", page: "/settings/:section", requiresLogin: true },
  { name: "Dashboard", page: "/dashboard", requiresLogin: true },
  { name: "Legal", page: "/legal/:section" },
];

function Nav(props) {
  const theme = useTheme();
  const auth = useAuth();
  const router = useRouter();

  let currentTypePage;
  types.forEach((type, i) => {
    const pathMatcher = new Path(type.page);
    if (pathMatcher.test(router.pathname)) {
      currentTypePage = type.page;
    }
  });

  return (
    <div
      style={{
        position: "relative",
        padding: "1rem",
        backgroundColor: "white",
        zIndex: 1101,
        boxShadow: "0 2px 5px 0 rgba(0,0,0,0.16)",
        color: "#000",
      }}
    >
      <a href="/" style={{ fontWeight: "bold", marginRight: "1rem" }}>
        Divjoy Library (Next.js + MUI)
      </a>

      <label>
        <input
          type="checkbox"
          checked={theme.name === "dark"}
          onClick={theme.toggle}
          readOnly={true}
        />{" "}
        Dark
      </label>

      <select
        onChange={(event) => router.push(event.target.value)}
        value={currentTypePage}
        style={{ marginLeft: "1rem" }}
      >
        <option value="">Component type</option>
        {types.map((type, i) => {
          return (
            <option key={i} value={type.page}>
              {type.name} {type.requiresLogin && !auth.user && "(must sign-in)"}
            </option>
          );
        })}
      </select>
      <span style={{ marginLeft: "1rem" }}>
        {auth.user ? (
          <a
            href="/auth/signout"
            onClick={(e) => {
              e.preventDefault();
              auth.signout();
            }}
          >
            Sign out
          </a>
        ) : (
          <a
            href="/auth/signin"
            onClick={(e) => {
              e.preventDefault();
              router.push(`/auth/signin`);
            }}
          >
            Sign in
          </a>
        )}
      </span>
    </div>
  );
}

export default Nav;
