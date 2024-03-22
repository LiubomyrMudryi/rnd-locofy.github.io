import { FunctionComponent } from "react";
import styled from "styled-components";

const RectangleCopy = styled.div`
  align-self: stretch;
  height: 1462px;
  position: relative;
  background-color: var(--color-gray-200);
  box-shadow: 2px 0px 6px rgba(0, 21, 41, 0.35);
  display: none;
`;
const OutputGeneratorChild = styled.img`
  height: 32px;
  width: 32px;
  position: relative;
  z-index: 3;
`;
const AntDesignPro = styled.img`
  align-self: stretch;
  height: 18px;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  flex-shrink: 0;
  z-index: 3;
`;
const AntDesignProWrapper = styled.div`
  height: 23.5px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px var(--padding-7xs-5);
  box-sizing: border-box;
`;
const OutputGenerator = styled.div`
  height: 32px;
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-xs);
`;
const InputProcessor = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-mid);
`;
const Div = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  margin: 0 !important;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
`;
const Group3Copy = styled.img`
  width: 14px;
  height: 14px;
  position: relative;
  mix-blend-mode: normal;
  z-index: 1;
`;
const Group3CopyWrapper = styled.div`
  height: 18px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-9xs) 0px 0px;
  box-sizing: border-box;
`;
const Div1 = styled.div`
  width: 62px;
  position: relative;
  line-height: 22px;
  font-weight: 500;
  display: inline-block;
  mix-blend-mode: normal;
  box-sizing: border-box;
  padding-right: var(--padding-xl);
  z-index: 1;
`;
const Wrapper = styled.div`
  width: 126px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Group52Copy = styled.img`
  width: 12px;
  height: 12px;
  position: relative;
  object-fit: contain;
  mix-blend-mode: normal;
  z-index: 1;
`;
const Group52Copy9Wrapper = styled.div`
  height: 17px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-8xs) 0px 0px;
  box-sizing: border-box;
`;
const Div2 = styled.div`
  overflow-x: auto;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-4xs) var(--padding-base);
  position: relative;
  gap: var(--gap-xs);
  z-index: 1;
`;
const Div3 = styled.div`
  height: 40px;
  width: 208px;
  position: relative;
  background-color: var(--color-gray-200);
  flex-shrink: 0;
  display: none;
`;
const Group9Copy = styled.img`
  width: 14px;
  height: 14px;
  position: relative;
  object-fit: cover;
  mix-blend-mode: normal;
  z-index: 1;
`;
const Div4 = styled.div`
  width: 62px;
  position: relative;
  line-height: 22px;
  display: inline-block;
  mix-blend-mode: normal;
  box-sizing: border-box;
  padding-right: var(--padding-xl);
  z-index: 1;
`;
const Group52Copy1 = styled.img`
  width: 12px;
  height: 12px;
  position: relative;
  object-fit: cover;
  mix-blend-mode: normal;
  z-index: 1;
`;
const Div5 = styled.div`
  background-color: var(--color-gray-200);
  overflow-x: auto;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-4xs) var(--padding-base);
  gap: var(--gap-xs);
  z-index: 1;
`;
const Group5Copy = styled.img`
  width: 14px;
  height: 13px;
  position: relative;
  object-fit: cover;
  mix-blend-mode: normal;
  z-index: 1;
`;
const Group5CopyWrapper = styled.div`
  height: 18px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-8xs) 0px 0px;
  box-sizing: border-box;
`;
const Group5Copy1 = styled.img`
  width: 14px;
  height: 14px;
  position: relative;
  object-fit: cover;
  z-index: 1;
`;
const Div6 = styled.div`
  width: 62px;
  position: relative;
  line-height: 22px;
  display: inline-block;
  box-sizing: border-box;
  padding-right: var(--padding-xl);
  z-index: 1;
`;
const FrameDiv = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Group52Copy2 = styled.img`
  width: 12px;
  height: 12px;
  position: relative;
  object-fit: contain;
  z-index: 1;
`;
const Div7 = styled.div`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-4xs) var(--padding-base);
  position: relative;
  gap: var(--gap-xs);
  z-index: 1;
`;
const Div8 = styled.div`
  align-self: stretch;
  height: 96px;
  position: relative;
  background-color: var(--color-gray-600);
  display: none;
`;
const Rectangle8Copy = styled.div`
  height: 40px;
  width: 208px;
  position: relative;
  background-color: var(--color-dodgerblue);
  display: none;
`;
const Div9 = styled.div`
  position: relative;
  line-height: 22px;
  display: inline-block;
  min-width: 70px;
  z-index: 4;
`;
const Rectangle8Copy23Parent = styled.div`
  align-self: stretch;
  background-color: var(--color-dodgerblue);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-4xs) var(--padding-23xl);
  z-index: 3;
`;
const Div10 = styled.div`
  position: relative;
  line-height: 22px;
  display: inline-block;
  mix-blend-mode: normal;
  min-width: 70px;
  z-index: 4;
`;
const Wrapper1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-23xl);
  color: var(--color-gray-700);
`;
const Parent1 = styled.div`
  align-self: stretch;
  background-color: var(--color-gray-600);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-5xs) 0px var(--padding-6xs);
  gap: var(--gap-lgi);
  z-index: 1;
`;
const Group = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  color: var(--color-white);
`;
const Group7Copy = styled.img`
  width: 15px;
  height: 14px;
  position: relative;
  object-fit: cover;
  mix-blend-mode: normal;
  z-index: 1;
`;
const Wrapper2 = styled.div`
  width: 127px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Div11 = styled.div`
  overflow-x: auto;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-4xs) var(--padding-base);
  position: relative;
  gap: var(--gap-2xs);
  z-index: 1;
`;
const Group7Copy1 = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 15px;
  height: 14px;
  object-fit: cover;
  mix-blend-mode: normal;
  z-index: 1;
`;
const ShapeIcon = styled.img`
  position: absolute;
  top: 0.3px;
  left: 1.2px;
  width: 12px;
  height: 13px;
  z-index: 2;
`;
const Group7CopyParent = styled.div`
  width: 15px;
  height: 14px;
  position: relative;
`;
const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-9xs) 0px 0px;
`;
const Div12 = styled.div`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-4xs) var(--padding-base);
  position: relative;
  gap: var(--gap-2xs);
  z-index: 1;
`;
const Parent2 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-891xl-5);
  gap: var(--gap-5xs);
  @media screen and (max-width: 1225px) {
    padding-bottom: var(--padding-573xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 750px) {
    padding-bottom: var(--padding-366xl);
    box-sizing: border-box;
  }
`;
const Icon = styled.img`
  align-self: stretch;
  height: 40px;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
  z-index: 3;
`;
const RectangleCopyParentRoot = styled.div`
  height: 1462px;
  width: 208px;
  background-color: var(--color-gray-200);
  box-shadow: 2px 0px 6px rgba(0, 21, 41, 0.35);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-base-5) 0px 0px;
  box-sizing: border-box;
  gap: var(--gap-lgi-5);
  z-index: 2;
  text-align: left;
  font-size: var(--font-size-sm);
  color: var(--color-gray-700);
  font-family: var(--font-pingfang-sc);
  @media screen and (max-width: 1050px) {
    display: none;
  }
`;

const GroupComponent: FunctionComponent = () => {
    return (
        <RectangleCopyParentRoot>
            <RectangleCopy />
            <InputProcessor>
                <OutputGenerator>
                    <OutputGeneratorChild loading="lazy" alt="" src="/group-5.svg" />
                    <AntDesignProWrapper>
                        <AntDesignPro loading="lazy" alt="" src="/ant-design-pro.svg" />
                    </AntDesignProWrapper>
                </OutputGenerator>
            </InputProcessor>
            <Parent2>
                <Div2>
                    <Div />
                    <Group3CopyWrapper>
                        <Group3Copy alt="" src="/group-3-copy.svg" />
                    </Group3CopyWrapper>
                    <Wrapper>
                        <Div1>仪表盘</Div1>
                    </Wrapper>
                    <Group52Copy9Wrapper>
                        <Group52Copy alt="" src="/group-52-copy-9@2x.png" />
                    </Group52Copy9Wrapper>
                </Div2>
                <Div5>
                    <Div3 />
                    <Group3CopyWrapper>
                        <Group9Copy alt="" src="/group-9-copy@2x.png" />
                    </Group3CopyWrapper>
                    <Wrapper>
                        <Div4>表单页</Div4>
                    </Wrapper>
                    <Group52Copy9Wrapper>
                        <Group52Copy1 alt="" src="/group-52-copy-11-3@2x.png" />
                    </Group52Copy9Wrapper>
                </Div5>
                <Div2>
                    <Div />
                    <Group5CopyWrapper>
                        <Group5Copy alt="" src="/group-5-copy@2x.png" />
                    </Group5CopyWrapper>
                    <Wrapper>
                        <Div4>列表页</Div4>
                    </Wrapper>
                    <Group52Copy9Wrapper>
                        <Group52Copy1 alt="" src="/group-52-copy-11-3@2x.png" />
                    </Group52Copy9Wrapper>
                </Div2>
                <Group>
                    <Div7>
                        <Div />
                        <Group3CopyWrapper>
                            <Group5Copy1 loading="lazy" alt="" src="/group-5-copy-2@2x.png" />
                        </Group3CopyWrapper>
                        <FrameDiv>
                            <Div6>详情页</Div6>
                        </FrameDiv>
                        <Group52Copy9Wrapper>
                            <Group52Copy2 alt="" src="/group-52-copy-12@2x.png" />
                        </Group52Copy9Wrapper>
                    </Div7>
                    <Parent1>
                        <Div8 />
                        <Rectangle8Copy23Parent>
                            <Rectangle8Copy />
                            <Div9>基础详情页</Div9>
                        </Rectangle8Copy23Parent>
                        <Wrapper1>
                            <Div10>高级详情页</Div10>
                        </Wrapper1>
                    </Parent1>
                </Group>
                <Div2>
                    <Div />
                    <Group3CopyWrapper>
                        <Group9Copy alt="" src="/checkcircleo-copy@2x.png" />
                    </Group3CopyWrapper>
                    <Wrapper>
                        <Div4>结果页</Div4>
                    </Wrapper>
                    <Group52Copy9Wrapper>
                        <Group52Copy1 alt="" src="/group-52-copy-11-3@2x.png" />
                    </Group52Copy9Wrapper>
                </Div2>
                <Div11>
                    <Div />
                    <Group3CopyWrapper>
                        <Group7Copy alt="" src="/group-7-copy1@2x.png" />
                    </Group3CopyWrapper>
                    <Wrapper2>
                        <Div4>异常页</Div4>
                    </Wrapper2>
                    <Group52Copy9Wrapper>
                        <Group52Copy1 alt="" src="/group-52-copy-11-3@2x.png" />
                    </Group52Copy9Wrapper>
                </Div11>
                <Div12>
                    <Div />
                    <Inner>
                        <Group7CopyParent>
                            <Group7Copy1 alt="" src="/group-7-copy@2x.png" />
                            <ShapeIcon loading="lazy" alt="" src="/shape.svg" />
                        </Group7CopyParent>
                    </Inner>
                    <FrameDiv>
                        <Div4>个人页</Div4>
                    </FrameDiv>
                    <Group52Copy9Wrapper>
                        <Group52Copy1
                            loading="lazy"
                            alt=""
                            src="/group-52-copy-11-3@2x.png"
                        />
                    </Group52Copy9Wrapper>
                </Div12>
            </Parent2>
            <Icon loading="lazy" alt="" src="/1@2x.png" />
        </RectangleCopyParentRoot>
    );
};

export default GroupComponent;
