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
import React, { useState } from "react";
import styles from "./index.module.scss";
import HeaderBlock from "@/component/block/header/index";

const useStyles = createStyles((theme) => ({
  button: {
    margin: "0 auto",
    maxWidth: "600px",
    position: "relative",
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
      <HeaderBlock />
      <Container my="md">
        <Grid>
          <Grid.Col xs={12}>
            <Card withBorder radius="md" className={classes.card}>
              <div className={styles.login_title_text}>ログイン</div>
              <Autocomplete
                //data={data}
                //rightSection={loading ? <Loader size={16} /> : null}
                label="メールアドレス"
                placeholder="xxxx@gmail.com"
                data={[]}
                className={classes.textFeiled}
              />

              <PasswordInput
                label="パスワード"
                placeholder="Passwrod01"
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
            </Card>
          </Grid.Col>
        </Grid>
      </Container>
    </>
  );
};

export default Login;
