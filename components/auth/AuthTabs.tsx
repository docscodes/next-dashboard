import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LoginFrom from "./LoginForm";

const AuthTabs = () => {
  return (
    <Tabs
      defaultValue="login"
      className="w-[400px]"
    >
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="login">Login</TabsTrigger>
        <TabsTrigger value="register">Register</TabsTrigger>
      </TabsList>
      <TabsContent value="login">
        <LoginFrom />
      </TabsContent>
      <TabsContent value="register">Register</TabsContent>
    </Tabs>
  );
};

export default AuthTabs;
