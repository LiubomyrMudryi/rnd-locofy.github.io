import { FunctionComponent } from "react";
import styled from "styled-components";

const Rectangle2Copy = styled.div`
  height: 48px;
  width: 1232px;
  position: relative;
  background-color: var(--color-white);
  box-shadow: 0px 1px 4px rgba(0, 21, 41, 0.12);
  display: none;
  max-width: 100%;
`;
const Group55Copy = styled.img`
  width: 16px;
  height: 16px;
  position: relative;
  object-fit: cover;
  z-index: 1;
`;
const Group55Copy2Wrapper = styled.div`
  height: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-9xs) 0px 0px;
  box-sizing: border-box;
`;
const Oval = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 50%;
  background-color: var(--color-lightgray);
  width: 100%;
  height: 100%;
  z-index: 1;
`;
const GroupIcon = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 24px;
  height: 24px;
  z-index: 2;
`;
const OvalParent = styled.div`
  height: 24px;
  width: 24px;
  position: relative;
`;
const Div = styled.div`
  position: relative;
  line-height: 22px;
  display: inline-block;
  min-width: 42px;
  z-index: 1;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-12xs) 0px 0px;
`;
const FrameParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const Icon1 = styled.img`
  width: 14px;
  height: 14px;
  position: relative;
  z-index: 4;
`;
const Container = styled.div`
  height: 19px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-8xs) 0px 0px;
  box-sizing: border-box;
`;
const Header1 = styled.header`
  align-self: stretch;
  background-color: var(--color-white);
  box-shadow: 0px 1px 4px rgba(0, 21, 41, 0.12);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: var(--padding-xs) var(--padding-9xl);
  box-sizing: border-box;
  gap: var(--gap-5xl);
  max-width: 100%;
  z-index: 3;
  text-align: left;
  font-size: var(--font-size-sm);
  color: var(--color-gray-500);
  font-family: var(--font-pingfang-sc);
`;
const Header2Child = styled.div`
  align-self: stretch;
  height: 98px;
  position: relative;
  background-color: var(--color-white);
  display: none;
`;
const Copy = styled.div`
  position: relative;
  line-height: 22px;
  display: inline-block;
  min-width: 28px;
  z-index: 1;
`;
const DataProcessor = styled.div`
  position: relative;
  line-height: 22px;
  display: inline-block;
  min-width: 7px;
  z-index: 1;
`;
const Copy1 = styled.div`
  position: relative;
  line-height: 22px;
  color: var(--color-gray-500);
  display: inline-block;
  min-width: 70px;
  z-index: 1;
`;
const CopyParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
  @media screen and (max-width: 1225px) {
    display: none;
  }
`;
const H = styled.h3`
  margin: 0;
  position: relative;
  font-size: var(--font-size-xl);
  line-height: 28px;
  font-weight: 500;
  font-family: inherit;
  color: var(--color-gray-300);
  display: inline-block;
  min-width: 100px;
  white-space: nowrap;
  z-index: 1;
`;
const FrameGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-base);
`;
const Header2Inner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-13xl);
`;
const ValueExtractor = styled.div`
  width: 1204px;
  height: 1px;
  position: relative;
  background-color: var(--color-gainsboro);
  max-width: 100%;
  z-index: 1;
`;
const Header2 = styled.div`
  align-self: stretch;
  background-color: var(--color-white);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-base) 0px 0px;
  box-sizing: border-box;
  gap: var(--gap-mini);
  max-width: 100%;
`;
const ParentRoot = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  top: 0;
  z-index: 99;
  position: sticky;
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-sm);
  color: var(--color-gray-400);
  font-family: var(--font-pingfang-sc);
`;

const FrameComponent: FunctionComponent = () => {
    return (
        <ParentRoot>
            <Header1>
                <Rectangle2Copy />
                <Group55Copy2Wrapper>
                    <Group55Copy loading="lazy" alt="" src="/group-55-copy-2@2x.png" />
                </Group55Copy2Wrapper>
                <Group55Copy2Wrapper>
                    <Group55Copy loading="lazy" alt="" src="/group-19-copy-4@2x.png" />
                </Group55Copy2Wrapper>
                <FrameParent>
                    <OvalParent>
                        <Oval />
                        <GroupIcon loading="lazy" alt="" src="/group1.svg" />
                    </OvalParent>
                    <Wrapper>
                        <Div>用户名</Div>
                    </Wrapper>
                </FrameParent>
                <Container>
                    <Icon1 loading="lazy" alt="" src="/2.svg" />
                </Container>
            </Header1>
            <Header2>
                <Header2Child />
                <Header2Inner>
                    <FrameGroup>
                        <CopyParent>
                            <Copy>首页</Copy>
                            <DataProcessor>/</DataProcessor>
                            <Div>详情页</Div>
                            <DataProcessor>/</DataProcessor>
                            <Copy1>基础详情页</Copy1>
                        </CopyParent>
                        <H>基础详情页</H>
                    </FrameGroup>
                </Header2Inner>
                <ValueExtractor />
            </Header2>
        </ParentRoot>
    );
};

export default FrameComponent;
