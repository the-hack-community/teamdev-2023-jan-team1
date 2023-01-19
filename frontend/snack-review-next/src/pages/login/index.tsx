import {
  createStyles,
  Autocomplete,
  Card,
  Loader,
  PasswordInput,
  Button,
  Container,
  Grid,
} from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./index.module.scss";
//import email from "@/img/icon/form/email.svg";
//import logo from "@/img/logo/logo.svg";

const useStyles = createStyles((theme) => ({
  button: {
    margin: "0 auto",
    maxWidth: "300px",
    position: "relative",
    background: "#F87171",
    borderRadius: "8px",
    transition: "background-color 150ms ease",
  },
  card: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
  },
  textFeiled: {
    margin: "30px",
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 700,
  },

  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderRadius: theme.radius.md,
    height: 90,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    transition: "box-shadow 150ms ease, transform 100ms ease",

    "&:hover": {
      boxShadow: `${theme.shadows.md} !important`,
      transform: "scale(1.05)",
    },
  },
}));

const Login = () => {
  const { classes, theme } = useStyles();

  return (
    <>
      <Container my="md" className={styles.content}>
        <Grid>
          <Grid.Col xs={12}>
            <div className={styles.log_block}>
              <Image
                src="logo.svg"
                alt={"お菓子シェアサイトのロゴです"}
                width={169}
                height={69}
              />
            </div>
            <div className={styles.login_title_text}>ログインする</div>
            {/* TODO: placeholderにアイコンを設定する */}
            <Autocomplete
              //data={data}
              //rightSection={loading ? <Loader size={16} /> : null}
              required
              label="メールアドレス"
              placeholder="mail@example.com"
              data={[]}
              className={classes.textFeiled}
            />
            {/* TODO: placeholderにアイコンを設定する */}
            <PasswordInput
              required
              label="パスワード"
              placeholder="your password"
              id="your-password"
              className={classes.textFeiled}
              //{...others}
            />
            <Button
              fullWidth
              className={classes.button}
              color={theme.primaryColor}
            >
              ログイン
            </Button>
            <div className={styles.signup_content}>
              <p className={styles.signup_text}>
                新規作成は
                <Link href={"/signup"} className={styles.signup_link_text}>
                  こちら
                </Link>
              </p>
            </div>
          </Grid.Col>
        </Grid>
      </Container>
    </>
  );
};

export default Login;
