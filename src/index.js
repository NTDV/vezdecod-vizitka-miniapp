import React from "react";
import ReactDOM from "react-dom";
import {
    AdaptivityProvider,
    ConfigProvider,
    AppRoot,
    SplitLayout,
    SplitCol,
    View,
    Panel,
    PanelHeader,
    Header,
    Group,
    SimpleCell,
    Button,
    Text,
    Title,
    Avatar,
    SizeType,
    withAdaptivity,
    Card,
    CardScroll,
    Div,
    ModalRoot,
    ModalPage,
    ViewWidth
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import {
    Icon28AdvertisingOutline,
    Icon28BoxHeartOutline,
    Icon28HomeOutline,
    Icon28SchoolOutline,
    Icon28ServicesOutline,
    Icon28TargetOutline,
    Icon28UserOutline
} from "@vkontakte/icons";
import {LikeButton} from "./LikeButton";

const Main = ({ sizeX, viewWidth }) => {
    const isDesktop = viewWidth >= ViewWidth.SMALL_TABLET;

    const [modal, setModal] = React.useState(null);

    const modalRoot = (
        <ModalRoot activeModal={modal}>
            <ModalPage
                id="danila"
                onClose={() => setModal(null)}
            >
                <Group style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <img src="pictures/danila_avatar_full.jpg" style={{height: "100%", width: "100%", objectFit: "contain"}}/>
                </Group>
            </ModalPage>
            <ModalPage
                id="dima"
                onClose={() => setModal(null)}
            >
                <Group style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <img src="pictures/dima_avatar_full.jpg" style={{height: "100%", width: "100%", objectFit: "contain"}}/>
                </Group>
            </ModalPage>
            <ModalPage
                id="stas"
                onClose={() => setModal(null)}
            >
                <Group style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <img src="pictures/stas_avatar_full.jpg" style={{height: "100%", width: "100%", objectFit: "contain"}}/>
                </Group>
            </ModalPage>
            <ModalPage
                id="zhenya"
                onClose={() => setModal(null)}
            >
                <Group style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <img src="pictures/zhenya_avatar_full.jpg" style={{height: "100%", width: "100%", objectFit: "contain"}}/>
                </Group>
            </ModalPage>
        </ModalRoot>
    );

    return (
        <AppRoot>
            <SplitLayout header={<PanelHeader separator={false} shadow />}>
                <SplitCol spaced={true}>
                    <View activePanel="gradient" modal={modalRoot}>
                        <Panel id="gradient">
                            <PanelHeader>
                                <Header>
                                <Title weight="semibold" level="1" style={{display: "flex", alignItems: "center"}}>
                                    <img src="pictures/logo.png" alt="main logo" style={{maxHeight: 48, paddingBottom: 5, marginRight: 24}}/>
                                    Nice -_- Team
                                </Title>
                                </Header>
                            </PanelHeader>
                            <CardScroll size={(isDesktop) ? "s": "l" } style={isDesktop ? {} : {marginTop: 10}}>
                                <Card style={isDesktop ? {} : {width: "90vw"}}>
                                    <Group mode="plain">
                                        <Div style={{margin: sizeX === SizeType.REGULAR ? '-7px -7px 0 -7px' : 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                                            <Avatar size={128} src="pictures/danila_avatar.jpg" onClick={() => setModal("danila")}/>
                                            <Title style={{ marginBottom: 8, marginTop: 20 }} level="2" weight="medium">Данила Вальковец</Title>
                                            <Text style={{ marginBottom: 8, color: 'var(--text_secondary)' }} weight="regular">Собрал команду. Не знает, что с ней делать :)</Text>
                                            <Div style={{display: 'flex'}}>
                                                <a target="_blank" rel="noopener noreferrer" href="https://vk.com/id236915192">
                                                    <Button size="m" style={{marginRight: 10}} mode="primary">VK</Button>
                                                </a>
                                                <a target="_blank" rel="noopener noreferrer" href="https://github.com/NTDV">
                                                    <Button size="m" style={{marginRight: 10}} mode="commerce">GitHub</Button>
                                                </a>
                                                <LikeButton/>
                                            </Div>
                                        </Div>
                                    </Group>
                                    <Group mode="plain">
                                        <Header>Личные данные</Header>
                                        <SimpleCell before={<Icon28UserOutline />} description="Коротко о себе" >
                                            Чувствую себя отлично, хотя снова не<br/>выспался)
                                        </SimpleCell>
                                        <SimpleCell before={<Icon28HomeOutline />} description="Родной город">Воронеж</SimpleCell>
                                        <SimpleCell before={<Icon28SchoolOutline />} description="10 класс">МБОУ ОЦ Лидер им. А. В. Гордеева</SimpleCell>
                                        <SimpleCell before={<Icon28AdvertisingOutline />} description="Готовность к сотурдничеству">dahnh33@gmail.com</SimpleCell>
                                    </Group>
                                    <Group mode="plain">
                                        <Header>Программирование</Header>
                                        <SimpleCell before={<Icon28BoxHeartOutline />} description="Любимая технология">.NET Core (C# WPF)</SimpleCell>
                                        <SimpleCell before={<Icon28ServicesOutline />} description="Опыт разработки">ASP.NET Core 3, EF Core 3, Java SE 14,<br/> React, Arduino, Unity</SimpleCell>
                                        <SimpleCell before={<Icon28TargetOutline />} description="Текущая цель">Облегчение быта окружающих</SimpleCell>
                                    </Group>
                                </Card>
                                <Card style={isDesktop ? {} : {width: "90vw"}}>
                                    <Group mode="plain">
                                        <Div style={{margin: sizeX === SizeType.REGULAR ? '-7px -7px 0 -7px' : 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                                            <Avatar size={128} src="pictures/dima_avatar.jpg" onClick={() => setModal("dima")}/>
                                            <Title style={{ marginBottom: 8, marginTop: 20 }} level="2" weight="medium">Дмитрий Климкин</Title>
                                            <Text style={{ marginBottom: 8, color: 'var(--text_secondary)' }} weight="regular">Опять 30 часов коддинга за просто так</Text>
                                            <Div style={{display: 'flex'}}>
                                                <a target="_blank" rel="noopener noreferrer" href="https://vk.com/id180477809">
                                                    <Button size="m" style={{marginRight: 10}} mode="primary">VK</Button>
                                                </a>
                                                <a target="_blank" rel="noopener noreferrer" href="https://github.com/Dipvincer">
                                                    <Button size="m" style={{marginRight: 10}} mode="commerce">GitHub</Button>
                                                </a>
                                                <LikeButton/>
                                            </Div>
                                        </Div>
                                    </Group>
                                    <Group mode="plain">
                                        <Header>Личные данные</Header>
                                        <SimpleCell before={<Icon28UserOutline />} description="Коротко о себе" >
                                            Вроде как окончил школу :)
                                        </SimpleCell>
                                        <SimpleCell before={<Icon28HomeOutline />} description="Родной город">Воронеж</SimpleCell>
                                        <SimpleCell before={<Icon28SchoolOutline />} description="Окончил">МБОУ СОШ №1 с УИОП</SimpleCell>
                                        <SimpleCell before={<Icon28AdvertisingOutline />} description="Готовность к сотурдничеству">Если очень хорошо попросят</SimpleCell>
                                        <br/>
                                    </Group>
                                    <Group mode="plain">
                                        <Header>Программирование</Header>
                                        <SimpleCell before={<Icon28BoxHeartOutline />} description="Любимая технология">Unreal Engine 4</SimpleCell>
                                        <SimpleCell before={<Icon28ServicesOutline />} description="Опыт разработки">.NET Core, Arduino</SimpleCell>
                                        <SimpleCell before={<Icon28TargetOutline />} description="Текущая цель">ВОЗЬМИ И СДАЙ ЕГЭ!</SimpleCell>
                                    </Group>
                                </Card>
                                <Card style={isDesktop ? {} : {width: "90vw"}}>
                                    <Group mode="plain">
                                        <Div style={{margin: sizeX === SizeType.REGULAR ? '-7px -7px 0 -7px' : 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                                            <Avatar size={128} src="pictures/stas_avatar.jpg" onClick={() => setModal("stas")}/>
                                            <Title style={{ marginBottom: 8, marginTop: 20 }} level="2" weight="medium">Станислав Некрасов</Title>
                                            <Text style={{ marginBottom: 8, color: 'var(--text_secondary)' }} weight="regular">Хочу создать свою социальную сеть</Text>
                                            <Div style={{display: 'flex'}}>
                                                <a target="_blank" rel="noopener noreferrer" href="https://vk.com/nekstas">
                                                    <Button size="m" style={{marginRight: 10}} mode="primary">VK</Button>
                                                </a>
                                                <a target="_blank" rel="noopener noreferrer" href="https://github.com/nekstas">
                                                    <Button size="m" style={{marginRight: 10}} mode="commerce">GitHub</Button>
                                                </a>
                                                <LikeButton/>
                                            </Div>
                                        </Div>
                                    </Group>
                                    <Group mode="plain">
                                        <Header>Личные данные</Header>
                                        <SimpleCell before={<Icon28UserOutline />} description="Коротко о себе" >
                                            Люблю программировать и математику,<br/> снимаю всё, что вижу.
                                        </SimpleCell>
                                        <SimpleCell before={<Icon28HomeOutline />} description="Родной город">Воронеж</SimpleCell>
                                        <SimpleCell before={<Icon28SchoolOutline />} description="9 класс">МБОУ Гимназия №5</SimpleCell>
                                        <SimpleCell before={<Icon28AdvertisingOutline />} description="Готовность к сотурдничеству">Полная (наверное)</SimpleCell>
                                    </Group>
                                    <Group mode="plain">
                                        <Header>Программирование</Header>
                                        <SimpleCell before={<Icon28BoxHeartOutline />} description="Любимая технология">Python 3, Web</SimpleCell>
                                        <SimpleCell before={<Icon28ServicesOutline />} description="Опыт разработки">Python 3, Java, JS, HTML, CSS, Arduino<br/>Raspberry Pi, C++, Godot Engine</SimpleCell>
                                        <SimpleCell before={<Icon28TargetOutline />} description="Текущая цель">Можно просто: захват мира!)</SimpleCell>
                                    </Group>
                                </Card>
                                <Card style={isDesktop ? {} : {width: "90vw"}}>
                                    <Group mode="plain">
                                        <Div style={{margin: sizeX === SizeType.REGULAR ? '-7px -7px 0 -7px' : 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                                            <Avatar size={128} src="pictures/zhenya_avatar.jpg" onClick={() => setModal("zhenya")}/>
                                            <Title style={{ marginBottom: 8, marginTop: 20 }} level="2" weight="medium">Евгений Иванкин</Title>
                                            <Text style={{ marginBottom: 8, color: 'var(--text_secondary)' }} weight="regular">♪♫Never gonna give you up♫♪</Text>
                                            <Div style={{display: 'flex'}}>
                                                <a target="_blank" rel="noopener noreferrer" href="https://vk.com/eugen_iv">
                                                    <Button size="m" style={{marginRight: 10}} mode="primary">VK</Button>
                                                </a>
                                                <a target="_blank" rel="noopener noreferrer" href="https://github.com/eivankin">
                                                    <Button size="m" style={{marginRight: 10}} mode="commerce">GitHub</Button>
                                                </a>
                                                <LikeButton/>
                                            </Div>
                                        </Div>
                                    </Group>
                                    <Group mode="plain">
                                        <Header>Личные данные</Header>
                                        <SimpleCell before={<Icon28UserOutline />} description="Коротко о себе" >
                                            Люблю анекдоты
                                        </SimpleCell>
                                        <SimpleCell before={<Icon28HomeOutline />} description="Родной город">Сочи/Лиски/Воронеж</SimpleCell>
                                        <SimpleCell before={<Icon28SchoolOutline />} description="Окончил">МБОУ "СОШ № 101"</SimpleCell>
                                        <SimpleCell before={<Icon28AdvertisingOutline />} description="Готовность к сотурдничеству">Поговорим сперва о награде</SimpleCell>
                                        <br/>
                                    </Group>
                                    <Group mode="plain">
                                        <Header>Программирование</Header>
                                        <SimpleCell before={<Icon28BoxHeartOutline />} description="Любимая технология">Спасибо инфобезу, открыл шикарную<br/>"Brownie"</SimpleCell>
                                        <SimpleCell before={<Icon28ServicesOutline />} description="Опыт разработки">Python (Django, Flask, PyQt), Java, C++,<br/>Solidity + web3.py, JS, VK Mini Apps, PHP</SimpleCell>
                                        <SimpleCell before={<Icon28TargetOutline />} description="Текущая цель">Поступить в ВУЗ мечты и классно<br/>провести лето</SimpleCell>
                                    </Group>
                                </Card>
                            </CardScroll>
                        </Panel>
                    </View>
                </SplitCol>
            </SplitLayout>
        </AppRoot>
    );
};

const MainWithAdaptivity = withAdaptivity(Main, { sizeX: true, viewWidth: true });

ReactDOM.render(
    (<ConfigProvider>
        <AdaptivityProvider>
            <MainWithAdaptivity />
        </AdaptivityProvider>
    </ConfigProvider>),
    document.getElementById("root")
);
